
Object.defineProperty(exports, '__esModule', {
    value: true,
});

function* range(name, start, end) {
    for (let i = start; i <= end; i++) {
        yield `group-${name}-${i}`;
    }
}

class AuthTest {
    constructor(config, stuff) {
        this._logger = stuff.logger;
        this._numGgroups = config.numGroups || 20;
    }

    authenticate(user, password, cb) {
        const groups = [user, ...range(user, 1, this._numGgroups)];
        this._logger.debug({ user, password, groups }, `[authtest] authenticate successful ${groups.length}`);
        cb(null, groups);
    }

    adduser(user, password, cb) {
        this._logger.debug({ user, password }, '[authtest] adduser successful');
        cb(null, true);
    }
}

exports.default = AuthTest;
