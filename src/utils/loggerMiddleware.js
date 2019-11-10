import log from './log';

export default (req, res, done) => {
    log.verbose(req.originalUrl);
    done();
};
