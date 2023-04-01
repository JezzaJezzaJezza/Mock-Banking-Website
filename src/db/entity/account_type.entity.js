"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountType = void 0;
var typeorm_1 = require("typeorm");
var account_entity_1 = require("./account.entity");
var AccountType = /** @class */ (function () {
    function AccountType() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], AccountType.prototype, "account_type_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], AccountType.prototype, "type_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal', "default": function () { return null; } })
    ], AccountType.prototype, "interest_rate");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], AccountType.prototype, "create_time");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return account_entity_1.Account; }, function (account) { return account.account_type; })
    ], AccountType.prototype, "accounts");
    AccountType = __decorate([
        (0, typeorm_1.Entity)()
    ], AccountType);
    return AccountType;
}());
exports.AccountType = AccountType;
