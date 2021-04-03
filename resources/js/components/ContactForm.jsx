import { useForm } from '@inertiajs/inertia-react';

export function ContactForm ({ id }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    pseudo: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/biens/${ id }/contact`, {
      preserveScroll: true,
      onSuccess: () => {
        data.email = '';
        data.pseudo = '';
        data.message = '';
      },
    });
  }
  return (
    <form onSubmit={ handleSubmit }>
      <div className="mb-4 form-outline">
        <label className="form-label" htmlFor="pseudo">Pseudo</label>
        <input type="text" id="pseudo" name="pseudo" className="form-control" value={ data.pseudo } onChange={ (e) => setData("pseudo", e.target.value) } />
        { errors.pseudo && (<div className="alert alert-danger" role="alert" data-mdb-color="secondary">
          <i className="fas fa-check me-2"></i>
          { errors.pseudo }
          <button type="button" className="btn-close ms-2" data-mdb-dismiss="alert" aria-label="Close"></button>
        </div> )}
      </div>
      <div className="mb-4 form-outline">
        <label className="form-label" htmlFor="email">Adresse mail</label>
        <input type="email" id="email" name="email" className="form-control" value={ data.email } onChange={ (e) => setData("email", e.target.value) } />
        { errors.email && (<div className="alert alert-danger" role="alert" data-mdb-color="secondary">
          <i className="fas fa-check me-2"></i>
          { errors.email }
          <button type="button" className="btn-close ms-2" data-mdb-dismiss="alert" aria-label="Close"></button>
        </div> )}
      </div>
      <div className="mb-4 form-outline">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-control" id="message" name="message" rows="4" value={ data.message } onChange={ (e) => setData("message", e.target.value) } ></textarea>
        { errors.message && (<div className="alert alert-danger" role="alert" data-mdb-color="secondary">
          <i className="fas fa-check me-2"></i>
          { errors.message }
          <button type="button" className="btn-close ms-2" data-mdb-dismiss="alert" aria-label="Close"></button>
        </div> )}
      </div>
      <button type="submit" className="mb-4 btn btn-primary btn-block" disabled={ processing }>Envoyer</button>
    </form>
  )
}
