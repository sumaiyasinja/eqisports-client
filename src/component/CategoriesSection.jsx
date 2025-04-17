import {
  MdSportsCricket,
  MdOutlineSportsSoccer,
  MdSportsBasketball,
  MdSportsMma,
} from 'react-icons/md';
import { GiTennisRacket, GiShuttlecock } from 'react-icons/gi';
import Title from './Title';

const CategoriesSection = () => {
  return (
    <section data-aos="fade-up" className="max-width-wrapper mt-12 lg:mt-28">
      <div className="text-center mb-12">
        <Title title="Trending Categories" />
        <p className="m-4">
          Check out our most trending categories and find what you need!
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdSportsCricket className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Cricket</h3>
            <p className="mt-2">
              Get the best cricket gear for your next match or practice.
            </p>
          </div>

          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdOutlineSportsSoccer className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Football</h3>
            <p className="mt-2">
              Find all the gear you need to play the beautiful game.
            </p>
          </div>

          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdSportsBasketball className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Basketball</h3>
            <p className="mt-2">
              Get the best basketballs, hoops, and gear for your next game.
            </p>
          </div>

          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdSportsMma className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Boxing</h3>
            <p className="mt-2">
              Premium gloves, headgear, and accessories for your training and matches.
            </p>
          </div>

          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <GiShuttlecock className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Badminton</h3>
            <p className="mt-2">
              Lightweight rackets, birdies, and all your badminton essentials.
            </p>
          </div>

          <div className="bg-purple-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <GiTennisRacket className="text-5xl text-purple-500 dark:text-purple-300" />
            <h3 className="text-2xl font-semibold">Tennis</h3>
            <p className="mt-2">
              Find the best tennis rackets, balls, and gear for your next game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
