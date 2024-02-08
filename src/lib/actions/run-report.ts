import { createAction, Property } from '@activepieces/pieces-framework';
import { httpClient, HttpMethod, HttpHeader } from '@activepieces/pieces-common';
import { driverAuth } from '../..';

export const runReport = createAction({
  auth: driverAuth,
  name: 'run_report',
  displayName: 'runReport',
  description: 'Returns a customized report of your Google Analytics event data.',
  props: {
    property_id: Property.Number({
      required:  true,
      displayName: 'Property ID',
      description: 'Analytics property ID'
    }),
    body: Property.Json({
      displayName: 'Body',
      description: 'Data for the request body.',
      required: true,
      defaultValue: {}
  })
  },
  async run({ propsValue, auth }) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.POST,
      url: `https://analyticsdata.googleapis.com/v1beta/properties/${propsValue.property_id}:runReport`,
      headers: {
        [HttpHeader.AUTHORIZATION]: `Bearer ${auth.access_token}`,
        [HttpHeader.CONTENT_TYPE]: 'application/json',
      },
      body: propsValue.body,
    });

    return res.body;
  },
});
