// See docs: https://developers.sendinblue.com/reference/createdoicontact
const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];

require('dotenv').config();

apiKey.apiKey = process.env.SIB_API_KEY;

const logger = require('./logger');

async function initNewSubscriber(email, listIds, templateId, redirectUrl) {
  try {
    if (!email || !listIds.length > 0 || !templateId || redirectUrl) {
      throw Error('call must include email, lists, template id and redirect url');
    }

    const apiInstance = new SibApiV3Sdk.ContactsApi();

    // CreateDoiContact | Values to create the Double opt-in (DOI) contact
    const createDoiContact = new SibApiV3Sdk.CreateDoiContact();

    createDoiContact.email = email;
    // createDoiContact.attributes = {"FNAME":"John","LNAME":"Doe"};
    createDoiContact.includeListIds = listIds;
    createDoiContact.templateId = templateId;
    createDoiContact.redirectionUrl = redirectUrl;

    const output = await apiInstance.createDoiContact(createDoiContact);

    logger.info('SIB', output);
  } catch (error) {
    logger.error('[Sendinblue] Doi Contact creation error:', error);
  }
}

module.exports = { initNewSubscriber };
