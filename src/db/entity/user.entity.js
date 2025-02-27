"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var base_entity_entity_1 = require("./base_entity.entity");
var account_entity_1 = require("./account.entity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
        (0, typeorm_1.OneToMany)(function () { return account_entity_1.Account; }, function (account) { return account.user; })
    ], User.prototype, "accounts");
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}(base_entity_entity_1.BaseEntity));
exports.User = User;
