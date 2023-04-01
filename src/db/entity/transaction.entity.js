"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Transaction = void 0;
var typeorm_1 = require("typeorm");
var account_entity_1 = require("./account.entity");
var transaction_category_entity_1 = require("./transaction_category.entity");
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Transaction.prototype, "transaction_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 36 })
    ], Transaction.prototype, "account_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], Transaction.prototype, "transaction_content");
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' })
    ], Transaction.prototype, "transaction_value");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 36 })
    ], Transaction.prototype, "transaction_category_id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Transaction.prototype, "transaction_time");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_entity_1.Account; }, function (account) { return account.transactions; })
    ], Transaction.prototype, "account");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return transaction_category_entity_1.TransactionCategory; }, function (transaction_category) { return transaction_category.transactions; })
    ], Transaction.prototype, "transaction_category");
    Transaction = __decorate([
        (0, typeorm_1.Entity)()
    ], Transaction);
    return Transaction;
}());
exports.Transaction = Transaction;
