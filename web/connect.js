const runIDV = async () => {
  const trinsicService = new trinsic.TrinsicService({
    authToken: "<insert auth token here>",
  });
  const createResponse = await trinsicService.connection().createSession({
    verifications: [{ type: trinsic.VerificationType.GOVERNMENT_ID }],
  });
  const sessionId = createResponse.session.id;
  const clientToken = createResponse.session.clientToken;
  const connectClient = new trinsic.ConnectClient();
  connectClient.identityVerification(connectClient);
};

window.runIDV = runIDV;
