"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Account = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var branch_entity_1 = require("./branch.entity");
var account_type_entity_1 = require("./account_type.entity");
var transaction_entity_1 = require("./transaction.entity");
var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Account.prototype, "account_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 36 })
    ], Account.prototype, "user_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 8 })
    ], Account.prototype, "account_no");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 6 })
    ], Account.prototype, "sort_code");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 36 })
    ], Account.prototype, "account_type_id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Account.prototype, "create_time");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.accounts; })
    ], Account.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return branch_entity_1.Branch; }, function (branch) { return branch.accounts; })
    ], Account.prototype, "branch");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_type_entity_1.AccountType; }, function (account_type) { return account_type.accounts; })
    ], Account.prototype, "account_type");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return transaction_entity_1.Transaction; }, function (transaction) { return transaction.account; })
    ], Account.prototype, "transactions");
    Account = __decorate([
        (0, typeorm_1.Entity)()
    ], Account);
    return Account;
}());
exports.Account = Account;
