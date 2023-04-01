"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var account_entity_1 = require("./account.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], User.prototype, "user_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 32 })
    ], User.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], User.prototype, "first_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64, "default": function () { return null; } })
    ], User.prototype, "middle_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], User.prototype, "last_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 128 })
    ], User.prototype, "email_address");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 16 })
    ], User.prototype, "mobile_number");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' })
    ], User.prototype, "dob");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], User.prototype, "create_time");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return account_entity_1.Account; }, function (account) { return account.user; })
    ], User.prototype, "accounts");
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
