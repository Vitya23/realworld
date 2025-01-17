export class ServerMsg {
  /**
   * Database query error
   */
  mysqlConnect = 'Database query error';
  /**
   * Database connect error
   */
  mysqlQuery = 'Database connect error';
  /**
   * Number must be between %s and %s (actual %s)
   */
  wrongNumericParam = `Number must be between %s and %s (actual %s)`;
  /**
   * Must be a number
   */
  paramIsNotNumber = `Must be a number`;
  /**
   * Too small
   */
  numberIsTooSmall = `Too small`;
  /**
   * Too large
   */
  numberIsTooLarge = `Too large`;
  /**
   * Text must be between %s and %s characters (actual %s)
   */
  wrongTextParam = `Text must be between %s and %s characters (actual %s)`;
  /**
   * Too short
   */
  textIsTooShort = `Too short`;
  /**
   * Too long
   */
  textIsTooLong = `Too long`;
  /**
   * Is not a text
   */
  paramIsNotString = `Is not a text`;
  /**
   * Is not a boolean
   */
  paramIsNotBool = `Is not a boolean`;
  /**
   * Invalid user name
   */
  invalidUserName = `Invalid user name`;
  pageNotFound = `Page not found`;
  authRequired = `UNAUTHORIZED`;
  forbidden = `Forbidden`;
  /**
   * Is not an array
   */
  paramIsNotArray = `Is not an array`;
  /**
   * Array is too short
   */
  arrayIsTooShort = `Array is too short`;
  /**
   * Array is too long
   */
  arrayIsTooLong = `Array is too long`;
  /**
   * An error occurred during the Mysql transaction commit
   */
  errMysqlCommit = `An error occurred during the Mysql transaction commit`;
  /**
   * This parameter does not match the pattern
   */
  wrongPatternParam = `
  Этот параметр не соответствует шаблону`;
  /**
   * Missing request body
   */
   missingRequestBody = `Missing request body`;
  /**
   * Missing object in this property
   */
   missingObjectProperty = `Missing object in this property`;
  /**
   * A user with this email or username is already registered
   */
   usernameOrEmailAlreadyExists = `Пользователь с этим адресом электронной почты или именем пользователя уже зарегистрирован`;
  /**
   * Bad password or email
   */
   badPasswordOrEmail = `Неверный пароль или адрес электронной почты`;
  /**
   * Article with this slug exists: '%s'
   */
   slugExists = `Article with this slug exists: '%s'`;
  /**
   * INTERNAL SERVER ERROR
   */
   internalError = `INTERNAL SERVER ERROR`;
  /**
   * You have an outdated token
   */
   youHaveObsoleteToken = `You have an outdated token`;
}
