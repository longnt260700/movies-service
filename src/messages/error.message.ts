export const USER_MESSAGE = {
  PASSWORD_NOT_MATCH: 'The Password field is incorrect',
  KYC_ID_EXISTED: 'User had a kyc_id',
  KYC_CHECKING: 'Your KYC is being reviewed',
  KYC_SUCCESSFUL: 'Your KYC has been approved',
  KYC_FAILED: 'Your KYC has been rejected',
  KYC_DOCUMENT_SUCCESSFUL: 'Your document of KYC has been approved',
  KYC_DOCUMENT_FAILED: 'Your document of KYC has been rejected',
  KYC_FACIAL_SUCCESSFUL: 'Your facial similarity of KYC has been approved',
  KYC_FACIAL_FAILED: 'Your facial similarity of KYC has been rejected'
};
export const UPLOAD_MESSAGE = {
  FILE_NOT_FOUND: 'File not found!',
};
export const AUTH_MESSAGE = {
  EMAIL_NOT_EXIST: 'The account does not exist in the system. Please try again',
  EMAIL_HAS_TAKEN: 'The Email has been taken',
  EMAIL_NOT_VERIFY: 'The account does not verify.',
  EMAIL_EXIST: 'The account is already exist in the system. Please try again',
  WRONG_CREDENTIAL: 'Email or password is incorrect!',
  MAX_NUMBER: (fieldName: string, condition: number) => `The ${fieldName} field no more than ${condition} numbers`,
  MAX_LETTER: (fieldName: string, condition: number) => `The ${fieldName} field no more than ${condition} characters`,
  WRONG_CODE: 'The code field is expire or incorrect.',
  REGISTER_SEND_CODE: 'Register code sent to your Email',
  CHANGE_PASSWORD_SUCCESS: 'Change password successfully!',
  ACCESS_TOKEN_ERROR: 'This link is no longer active',
  TOKEN_EXPIRE_ERROR: 'Access token expired',
  TOKEN_VALID_ERROR: 'Access token not valid'
};

export const INVESTOR_MESSAGE = {
  UPDATE_SUCCESS: 'Update success',
  NOT_FOUND: 'The Investor is not found',
  EMAIL_TAKEN: 'The Email has been taken',
};

export const PROFILE_MESSAGE = {
  UPDATE_SUCCESS: 'Update success',
  NOT_FOUND: 'The profile is not found',
};

export const QUESTION_MESSAGE = {
  ANSWER_REQUIRED: 'The answers field is required!',
  NOT_FOUND: 'The category is not found',
  SUB_NOT_FOUND: 'The sub category is not found',
  QUESTION_EXISTED: 'The question has been existed',
  DELETE_SUCCESS: 'Delete question successfully',
  LIST_QUESTION_ERROR: 'List question not found',
  QUESTION_NOT_EXIST: 'The question is not exist in the system.'
};

export const ANSWER_MESSAGE = {
  ANSWER_LACK_OF: 'Your answers lack of data',
  USER_ANSWERED: 'You have answered those question!',
  INCORRECT: `This answer is incorrect`
};

export const DEAL_MESSAGE = {
  DEAL_DUPLICATE_NAME: 'The company name was exist in the system.',
  DEAL_NOT_EXIST: 'The deal is not exist in the system.',
  DEAL_HIGHLIGHT: 'HIGHLIGHT success',
  DEAL_REMOVE: 'Deal remove success',
  DEAL_NAME_TAKEN: 'The Company name have been taken',
  DEAL_DATE_NOT_PAST: 'The end date cannot be a date in the past',
  DEAL_EXPIRED: "Temporary Token expired"
};

export const ONFIDO_MESSAGE = {
  BAD_REQUEST_ONFIDO: 'BAD_REQUEST_ONFIDO',
};

export const LANDING_MESSAGE = {
  DEAL_LANDING_DUPLICATE: 'The deal has been existed on landing',
  DEAL_NOT_EXIST: 'The deal is not exist in the system.',
};

export const KNOWLEDGE_MESSAGE = {
  CATEGORY_NOT_EXIST: 'The category is not exist in the system.',
  POST_NOT_EXIST: 'The post is not exist in the system.',
  POST_REMOVE: 'Post remove success',
};

export const SUBCRIPTION_MESSAGE = {
  SUBCRIPTION_NOT_EXIST: 'The subscription is not exist in the system.',
  SUBCRIBED_DATE_NOT_PAST: 'The subcribed date cannot be a date in the past',
  EXIT_DATE_NOT_PAST: 'The exit date cannot be a date in the past',
  EXIT_DATE_NOT_BEFORE_SUBCRIBED_DATE: 'The exit date cannot be before subscribed date',
};

export const FAQ_MESSAGE = {
  TOPIC_DUPLICATE_NAME: 'The topic name was exist in the system.',
  TOPIC_NOT_EXIST: 'The topic is not exist in the system.',
  TOPIC_REMOVE: 'Topic remove success',
}

export const TICKET_MESSAGE = {
  TICKET_NOT_EXIST: 'The ticket is not exist in the system'
}