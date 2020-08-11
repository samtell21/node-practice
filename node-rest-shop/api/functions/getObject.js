const generr = require('./generr');

function getObject(o) {
    return function(s,n,id) {
        o.findById(id)
            .exec()
            .then(doc => {
                console.log(doc);
                s.status(200).json(doc);
            })
            .catch(err => n(generr(err,500)));
    };
}


module.exports = getObject;
