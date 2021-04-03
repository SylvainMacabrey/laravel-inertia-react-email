import { ContactForm } from "../../components/ContactForm";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

export default function Show ({ property, flash }) {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  }
  return (
    <Fragment>
      { flash.success && (<div className="mb-0 alert alert-success alert-dismissible alert-absolute fade show " role="alert" data-mdb-color="secondary">
        <i className="fas fa-check me-2"></i>
        { flash.success }
        <button type="button" className="btn-close ms-2" data-mdb-dismiss="alert" aria-label="Close"></button>
      </div> ) }
      <motion.div className="row" animate={{ x: [50, 0], y: [50, 0], oppacity: [0, 1] }} transition={{ delay: 0.1 }}>
        <h2 style={{ width: 100 + '%', textAlign: 'center', margin: 30 + 'px' }}>{ property.title }</h2>
      </motion.div>
      <div className="row">
        <div className="col-sm-6">
          <motion.div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" layoutId={ `image${ property.id }` } >
            <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
          </motion.div>
        </div>
        <div className="col-sm-6">
          <motion.div className="card" animate={{ x: [50, 0], y: [50, 0], oppacity: [0, 1] }} transition={{ delay: 0.1 }}>
            <div className="card-body">
              <h6 className="mb-2 card-subtitle text-muted" style={{ textAlign: 'right' }}>{ property.price } €</h6>
              <p className="card-text">Taille: { property.size } m2</p>
              <p className="card-text">Nombre de chambre(s): { property.bedrooms }</p>
              <p className="card-text">{ property.city } ({ property.postalCode })</p>
              <button type="button" className="mb-4 btn btn-primary btn-block" onClick={ () => toggleForm() }>Contacter l'agence</button>
              { showForm && ( <ContactForm id={ property.id } /> )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="row">
        <motion.div className="card" style={{ marginTop: 30 + 'px' }} animate={{ x: [50, 0], y: [50, 0], oppacity: [0, 1] }} transition={{ delay: 0.1 }}>
          <div className="card-body">
            <h6 className="mb-2 card-subtitle text-muted" >Description:</h6>
            <p className="card-text" style={{ textAlign: 'justify' }}>{ property.description }</p>
          </div>
        </motion.div>
      </div>
    </Fragment>
  )
}
