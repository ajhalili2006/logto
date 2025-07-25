const profile = {
  page_title: 'Account-Einstellungen',
  title: 'Account-Einstellungen',
  description:
    'Ändern Sie hier Ihre Kontoeinstellungen und verwalten Sie Ihre persönlichen Informationen, um die Sicherheit Ihres Kontos zu gewährleisten.',
  settings: {
    title: 'PROFIL-EINSTELLUNGEN',
    profile_information: 'Profil-Informationen',
    avatar: 'Avatar',
    name: 'Name',
    username: 'Benutzername',
  },
  link_account: {
    title: 'KONTO VERKNÜPFEN',
    email_sign_in: 'E-Mail-Anmeldung',
    email: 'Email',
    social_sign_in: 'Social-Log-in',
    link_email: 'E-Mail verknüpfen',
    link_email_subtitle:
      'Verknüpfen Sie Ihre E-Mail-Adresse, um sich anzumelden oder bei der Wiederherstellung Ihres Kontos zu helfen.',
    email_required: 'Email ist erforderlich',
    invalid_email: 'Ungültige E-Mail-Adresse',
    identical_email_address: 'Die eingegebene E-Mail-Adresse ist identisch mit der aktuellen.',
    anonymous: 'Anonym',
  },
  password: {
    title: 'PASSWORT & SICHERHEIT',
    password: 'Passwort',
    password_setting: 'Passworteinstellungen',
    new_password: 'Neues Passwort',
    confirm_password: 'Passwort bestätigen',
    enter_password: 'Geben Sie das aktuelle Passwort ein',
    enter_password_subtitle:
      'Überprüfen Sie, dass es sich um Sie handelt, um die Sicherheit Ihres Kontos zu schützen. Bitte geben Sie Ihr aktuelles Passwort ein, bevor Sie es ändern.',
    set_password: 'Passwort festlegen',
    verify_via_password: 'Überprüfen per Passwort',
    show_password: 'Passwort zeigen',
    required: 'Passwort ist erforderlich',
    do_not_match: 'Die Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.',
  },
  code: {
    enter_verification_code: 'Bestätigungscode eingeben',
    enter_verification_code_subtitle:
      'Der Bestätigungscode wurde an <strong>{{target}}</strong> gesendet',
    verify_via_code: 'Überprüfen per Bestätigungscode',
    resend: 'Bestätigungscode erneut senden',
    resend_countdown: 'Erneut senden in {{countdown}} Sekunden',
  },
  delete_account: {
    title: 'KONTO LÖSCHEN',
    label: 'Konto löschen',
    description:
      'Wenn Sie Ihr Konto löschen, werden alle Ihre persönlichen Informationen, Benutzerdaten und Konfigurationen entfernt. Diese Aktion kann nicht rückgängig gemacht werden.',
    button: 'Konto löschen',
    p: {
      has_issue:
        'Es tut uns leid zu hören, dass du dein Konto löschen möchtest. Bevor du dein Konto löschen kannst, musst du die folgenden Probleme lösen.',
      after_resolved:
        'Sobald du die Probleme gelöst hast, kannst du dein Konto löschen. Bitte zögere nicht, uns zu kontaktieren, wenn du Hilfe benötigst.',
      check_information:
        'Es tut uns leid zu hören, dass du dein Konto löschen möchtest. Bitte überprüfe die folgenden Informationen sorgfältig, bevor du fortfährst.',
      remove_all_data:
        'Das Löschen deines Kontos wird alle Daten über dich in der Logto Cloud dauerhaft entfernen. Bitte stelle sicher, dass du alle wichtigen Daten sicherst, bevor du fortfährst.',
      confirm_information:
        'Bitte bestätige, dass die oben stehenden Informationen deinen Erwartungen entsprechen. Sobald du dein Konto löschst, können wir es nicht wiederherstellen.',
      has_admin_role:
        'Da du die Admin-Rolle im folgenden Mandanten hast, wird dieser zusammen mit deinem Konto gelöscht:',
      has_admin_role_other:
        'Da du die Admin-Rolle in den folgenden Mandanten hast, werden diese zusammen mit deinem Konto gelöscht:',
      quit_tenant: 'Du bist dabei, den folgenden Mandanten zu verlassen:',
      quit_tenant_other: 'Du bist dabei, die folgenden Mandanten zu verlassen:',
    },
    issues: {
      paid_plan:
        'Der folgende Mandant hat einen kostenpflichtigen Plan, bitte kündige das Abonnement zuerst:',
      paid_plan_other:
        'Die folgenden Mandanten haben kostenpflichtige Pläne, bitte kündige das Abonnement zuerst:',
      subscription_status: 'Der folgende Mandant hat ein Abonnementstatus-Problem:',
      subscription_status_other: 'Die folgenden Mandanten haben Abonnementstatus-Probleme:',
      open_invoice: 'Der folgende Mandant hat eine offene Rechnung:',
      open_invoice_other: 'Die folgenden Mandanten haben offene Rechnungen:',
    },
    error_occurred: 'Ein Fehler ist aufgetreten',
    error_occurred_description:
      'Entschuldigung, beim Löschen deines Kontos ist ein Fehler aufgetreten:',
    request_id: 'Anfrage-ID: {{requestId}}',
    try_again_later:
      'Bitte versuche es später erneut. Wenn das Problem weiterhin besteht, kontaktiere bitte das Logto-Team mit der Anfrage-ID.',
    final_confirmation: 'Endgültige Bestätigung',
    about_to_start_deletion:
      'Du bist dabei, den Löschvorgang zu starten und diese Aktion kann nicht rückgängig gemacht werden.',
    permanently_delete: 'Dauerhaft löschen',
  },
  set: 'Festlegen',
  change: 'Ändern',
  link: 'Verknüpfen',
  unlink: 'Verknüpfung aufheben',
  not_set: 'Nicht festgelegt',
  change_avatar: 'Avatar ändern',
  change_name: 'Name ändern',
  change_username: 'Benutzernamen ändern',
  set_name: 'Name festlegen',
  email_changed: 'E-Mail geändert.',
  password_changed: 'Passwort geändert.',
  updated: '{{target}} aktualisiert.',
  linked: '{{target}} verknüpft.',
  unlinked: '{{target}} Verknüpfung aufgehoben.',
  email_exists_reminder:
    'Diese E-Mail {{email}} ist mit einem bestehenden Konto verknüpft. Verknüpfen Sie hier eine andere E-Mail-Adresse.',
  unlink_confirm_text: 'Ja, Verknüpfung aufheben',
  unlink_reminder:
    'Benutzer können sich nicht mehr mit dem <span></span>-Konto anmelden, wenn Sie es trennen. Möchten Sie fortfahren?',
  fields: {
    /** UNTRANSLATED */
    name: 'Name',
    /** UNTRANSLATED */
    name_description:
      "The user's full name in displayable form including all name parts (e.g., “Jane Doe”).",
    /** UNTRANSLATED */
    avatar: 'Avatar',
    /** UNTRANSLATED */
    avatar_description: "URL of the user's avatar image.",
    /** UNTRANSLATED */
    familyName: 'Family name',
    /** UNTRANSLATED */
    familyName_description: 'The user\'s surname(s) or last name(s) (e.g., "Doe").',
    /** UNTRANSLATED */
    givenName: 'Given name',
    /** UNTRANSLATED */
    givenName_description: 'The user\'s given name(s) or first name(s) (e.g., "Jane").',
    /** UNTRANSLATED */
    middleName: 'Middle name',
    /** UNTRANSLATED */
    middleName_description: 'The user\'s middle name(s) (e.g., "Marie").',
    /** UNTRANSLATED */
    nickname: 'Nickname',
    /** UNTRANSLATED */
    nickname_description:
      'Casual or familiar name for the user, which may differ from their legal name.',
    /** UNTRANSLATED */
    preferredUsername: 'Preferred username',
    /** UNTRANSLATED */
    preferredUsername_description:
      'Shorthand identifier by which the user wishes to be referenced.',
    /** UNTRANSLATED */
    profile: 'Profile',
    /** UNTRANSLATED */
    profile_description:
      "URL of the user's human-readable profile page (e.g., social media profile).",
    /** UNTRANSLATED */
    website: 'Website',
    /** UNTRANSLATED */
    website_description: "URL of the user's personal website or blog.",
    /** UNTRANSLATED */
    gender: 'Gender',
    /** UNTRANSLATED */
    gender_description: 'The user\'s self-identified gender (e.g., "Female", "Male", "Non-binary")',
    /** UNTRANSLATED */
    birthdate: 'Birthdate',
    /** UNTRANSLATED */
    birthdate_description: 'The user\'s date of birth in a specified format (e.g., "MM-dd-yyyy").',
    /** UNTRANSLATED */
    zoneinfo: 'Timezone',
    /** UNTRANSLATED */
    zoneinfo_description:
      'The user\'s timezone in IANA format (e.g., "America/New_York" or "Europe/Paris").',
    /** UNTRANSLATED */
    locale: 'Language',
    /** UNTRANSLATED */
    locale_description: 'The user\'s language in IETF BCP 47 format (e.g., "en-US" or "zh-CN").',
    address: {
      /** UNTRANSLATED */
      formatted: 'Address',
      /** UNTRANSLATED */
      streetAddress: 'Street address',
      /** UNTRANSLATED */
      locality: 'City',
      /** UNTRANSLATED */
      region: 'State',
      /** UNTRANSLATED */
      postalCode: 'Zip code',
      /** UNTRANSLATED */
      country: 'Country',
    },
    /** UNTRANSLATED */
    address_description:
      'The user\'s full address in displayable form including all address parts (e.g., "123 Main St, Anytown, USA 12345").',
    /** UNTRANSLATED */
    fullname: 'Fullname',
    /** UNTRANSLATED */
    fullname_description:
      'Flexibly combines familyName, givenName, and middleName based on configuration.',
  },
};

export default Object.freeze(profile);
