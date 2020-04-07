exports.handler = async event => {

    if (!event.email.includes("@")) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Email is missing '@' "
            })
        }
    }

    if (!event.email.includes(".")) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Email is missing '.' "
            })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            isEmail: true
        })
    }
};