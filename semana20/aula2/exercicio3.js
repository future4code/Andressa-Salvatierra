exports.handler = async event => {
    
    const num1 = event.numero1
    const num2 = event.numero2
    
    const total = num1 + num2
    
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `A soma dos dois números é ${total}`
    })
  };
};