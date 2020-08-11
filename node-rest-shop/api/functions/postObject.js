const generr = require('./generr');

function postObject(s,n,object,message) {
    object
        .save()
        .then(result => {
            console.log(result);
            s.status(201).json({
                message: message,
                result: result
            });
        })
        .catch(err => n(generr(err, 500)));
}


module.exports = postObject;
