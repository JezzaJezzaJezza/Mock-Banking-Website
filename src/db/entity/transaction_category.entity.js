"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransactionCategory = void 0;
var typeorm_1 = require("typeorm");
var transaction_entity_1 = require("./transaction.entity");
var TransactionCategory = /** @class */ (function () {
    function TransactionCategory() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], TransactionCategory.prototype, "transaction_category_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 32 })
    ], TransactionCategory.prototype, "category_name");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], TransactionCategory.prototype, "create_time");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return transaction_entity_1.Transaction; }, function (transaction) { return transaction.account; })
    ], TransactionCategory.prototype, "transactions");
    TransactionCategory = __decorate([
        (0, typeorm_1.Entity)()
    ], TransactionCategory);
    return TransactionCategory;
}());
exports.TransactionCategory = TransactionCategory;
