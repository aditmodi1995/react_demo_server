import PostData from '../models/postData';
import { validate } from '../utils/validation';

export const postData = (req, res) => {
  console.log('body:',req.body)

  let valid_name = validate(/^[A-Za-z0-9]+$/i, req.body.name);
  let valid_phone = validate(/^[0-9]+$/i, req.body.phone);
  let valid_age = validate(/^[0-9]+$/i, req.body.age);
  let valid_emp_id = validate(/^[A-Za-z0-9]+$/i, req.body.emp_id);
  if (valid_name && valid_age && valid_phone && valid_emp_id){
        let p = new PostData();
        p.name = req.body.name;
        p.emp_id = req.body.emp_id;
        p.age = req.body.age;
        p.dept = req.body.dept;
        p.phone = req.body.phone;
        p.gender = req.body.gender;
        p.save(((err) => {
          if (err){res.send(`Error in uploading: ${err}`);}
          else {res.send('Form saved');}
        }));
  }
}

export const fetchPosts = (req, res) => {
  PostData.find({}, (err, values) => {
    if(err) res.send(err);
    else res.send(values);
  })
}

export const getForm = (req, res) => {
  PostData.findOne({emp_id: req.params.id}, (err, values) => {
    if(err) res.send('error:', err);
    else res.send(values);
  })
}

export const editForm = (req, res) => {
  PostData.findOne({emp_id: req.params.id}, (err, values) => {
    if(err){
      res.send(err)
    }
    else{
      values.name = req.body.name;
      values.dept = req.body.dept;
      values.age = req.body.age;
      values.gender = req.body.gender;
      values.phone = req.body.phone;
      values.save((error) => {
        if(error) res.send(error);
        else res.send('Changes updated');
      });
    }
  })
}