import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl"/>
            <img src={parts} className="absolute right-5 top-1/2 w-1/2 rounded-lg border-8 border-white shadow-2xl"/>
        </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
          <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas, ad voluptatibus quaerat quisquam officiis! Dignissimos vitae itaque assumenda, dicta eveniet obcaecati ad sit autem a voluptas, reiciendis quo harum eligendi?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eligendi eum qui non pariatur autem provident odio nihil nesciunt sint.</p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;


// 58.6
