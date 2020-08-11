function generr(err, status) {
    console.log(err);
    const error = new Error(err);
    error.status = status;
    return error;
}

module.exports = generr;
