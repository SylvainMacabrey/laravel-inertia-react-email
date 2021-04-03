import { InertiaLink } from "@inertiajs/inertia-react";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function Index ({ properties }) {
  return (
    <Fragment>
      <div className="row">
        { properties.map(property => (
          <div className="col-sm-4">
            <div key={ property.id } className="card" style={{ width: 18 + 'rem', marginBottom: 20 + 'px' }}>
              <motion.div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" layoutId={ `image${ property.id }` } >
                <InertiaLink href={ `/biens/${ property.id }` }>
                  <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                  <div className="mask mask-style"></div>
                </InertiaLink>
              </motion.div>
              <div className="card-body">
                <h5 className="card-title title-3-petits-points">{ property.title }</h5>
                <h6 className="mb-2 card-subtitle text-muted">{ property.price } €</h6>
                <p className="card-text">Taille: { property.size }</p>
                <p className="card-text">Nombre de chambre(s): { property.bedrooms }</p>
                <p className="card-text">{ property.city } ({ property.postalCode })</p>
                <InertiaLink href={ `/biens/${ property.id }` } className="card-link">Voir le bien</InertiaLink>
              </div>
            </div>
          </div>
        )) }
      </div>
    </Fragment>
  )
}
