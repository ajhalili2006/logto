import { Users } from '@logto/schemas';
import { DatabaseError } from 'pg';
import { NotFoundError, SlonikError } from 'slonik';

import RequestError from '@/errors/RequestError';
import { DeletionError, InsertionError, UpdateError } from '@/errors/SlonikError';
import { createContextWithRouteParameters } from '@/utils/test-utils';

import koaSlonikErrorHandler from './koa-slonik-error-handler';

describe('koaSlonikErrorHandler middleware', () => {
  const next = jest.fn();
  const ctx = createContextWithRouteParameters();

  it('should throw no errors if no errors are caught', async () => {
    await expect(koaSlonikErrorHandler()(ctx, next)).resolves.not.toThrow();
  });

  it('should throw original error if error type are not Slonik', async () => {
    const error = new Error('foo');

    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(error);
  });

  it('should throw original error if not intend to handled', async () => {
    const error = new SlonikError();

    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(error);
  });

  it('Insertion Error', async () => {
    const error = new InsertionError(Users, { id: '123', applicationId: 'bar' });
    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(
      new RequestError({
        code: 'entity.create_failed',
        name: Users.tableSingular,
      })
    );
  });

  it('Update Error', async () => {
    const error = new UpdateError(Users, {
      set: { name: 'punk' },
      where: { id: '123' },
      jsonbMode: 'merge',
    });
    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(
      new RequestError({
        code: 'entity.not_exists',
        name: Users.tableSingular,
      })
    );
  });

  it('Deletion Error', async () => {
    const error = new DeletionError();
    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(
      new RequestError({
        code: 'entity.not_found',
        status: 404,
      })
    );
  });

  it('NotFoundError', async () => {
    const error = new NotFoundError();
    next.mockImplementationOnce(() => {
      throw error;
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(
      new RequestError({
        code: 'entity.not_found',
        status: 404,
      })
    );
  });

  it('DatabaseError from PostgreSQL (not Slonik)', async () => {
    const message = 'Database error';
    next.mockImplementationOnce(() => {
      throw new DatabaseError(message, 99, 'error');
    });

    await expect(koaSlonikErrorHandler()(ctx, next)).rejects.toMatchError(
      new RequestError('entity.database_manipulation_failed', message)
    );
  });
});
