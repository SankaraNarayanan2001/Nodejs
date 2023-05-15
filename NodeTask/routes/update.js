const router=require('express').Router();

const update=require('../Controllers/contupdate');

const multer=require('multer');

const check=require('../middleware/check');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });



router.put('/update-user/:id',check.checkcheck,upload.single('image'),update.change)

module.exports=router;