"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor() {
        this._unique = Symbol(this.constructor.name);
    }
}
exports.Entity = Entity;
