exports.handler = async event => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Olá mundo, eu sou uma mensagem da AWS"
      })
    };
  };