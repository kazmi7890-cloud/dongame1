module.exports = ({ env }) => ({
    // email: {
    //   provider: "nodemailer",
    //   providerOptions: {
    //     nodemailer_default_from: "support@dongamers.com",
    //     nodemailer_default_replyto: "support@dongamers.com",
    //     host: "smtp.office365.com",
    //     port: "587", // Add port number
    //     password: "Wooglyo@123",
    //     username: "support@dongamers.com",
    //     authMethod: "SMTP", // Auth method
    //   }
    // },

    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'support@dongamers.com',
        defaultReplyTo: 'support@dongamers.com',
      },
    },
  });
