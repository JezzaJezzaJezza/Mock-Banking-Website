"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Branch = void 0;
var typeorm_1 = require("typeorm");
var account_entity_1 = require("./account.entity");
var Branch = /** @class */ (function () {
    function Branch() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Branch.prototype, "branch_id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 64 })
    ], Branch.prototype, "branch_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 8 })
    ], Branch.prototype, "branch_sort_code");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Branch.prototype, "create_time");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return account_entity_1.Account; }, function (account) { return account.branch; })
    ], Branch.prototype, "accounts");
    Branch = __decorate([
        (0, typeorm_1.Entity)()
    ], Branch);
    return Branch;
}());
exports.Branch = Branch;
