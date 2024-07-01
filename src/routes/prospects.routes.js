import { Router } from "express";
import * as prospectsCtrl from "../controllers/prospect.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/', prospectsCtrl.getProspects);

router.post('/', [authJwt.verifyToken], prospectsCtrl.createProspect);

router.get('/:prospectId', prospectsCtrl.getProspectById);

router.put('/:prospectId', prospectsCtrl.updateProspectById);

router.delete('/:prospectId', [authJwt.verifyToken, authJwt.isModerator], prospectsCtrl.deleteProspectById);

export default router;
