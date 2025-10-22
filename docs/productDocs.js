"use strict";
/**
 * @swagger
 * /api/v1/products/:
 *   get:
 *     summary: Get all products
 *     tags: [FETCH DATA]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: pagination
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: barcode
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of products
 */
