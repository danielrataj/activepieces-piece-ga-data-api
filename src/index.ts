
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";

import { runReport } from "./lib/actions/run-report";

export const driverAuth = PieceAuth.OAuth2({
  description: '',
  authUrl: 'https://accounts.google.com/o/oauth2/auth',
  tokenUrl: 'https://oauth2.googleapis.com/token',
  required: true,
  scope: ['https://www.googleapis.com/auth/analytics', 'https://www.googleapis.com/auth/analytics.readonly']
});

export const gaCosts = createPiece({
  displayName: "Google Analytics Data API",
  auth: driverAuth,
  minimumSupportedRelease: '0.9.0',
  logoUrl: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
  authors: [],
  actions: [
    runReport
  ],
  triggers: [],
});
