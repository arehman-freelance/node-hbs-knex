/*
 Navicat Premium Data Transfer

 Source Server         : frappe_docker@local
 Source Server Type    : MariaDB
 Source Server Version : 100608
 Source Host           : localhost:3306
 Source Schema         : usermanagement_tut

 Target Server Type    : MariaDB
 Target Server Version : 100608
 File Encoding         : 65001

 Date: 21/06/2022 16:11:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `item_code` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `gross_price` decimal(10, 2) NULL DEFAULT NULL,
  `tax_rate` decimal(10, 2) NULL DEFAULT NULL,
  `tax_amount` decimal(10, 2) NULL DEFAULT NULL,
  `net_price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES (1, 'ITM-001', '', 100.00, 10.00, 10.00, 110.00);

SET FOREIGN_KEY_CHECKS = 1;
