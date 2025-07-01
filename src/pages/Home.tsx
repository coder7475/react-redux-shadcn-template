import { Counter } from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { useGetPokemonByNameQuery } from "@/services/pokemon";

const Home = () => {
    // Using a query hook automatically fetches data and returns query values
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    console.log(data);
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <h1 className="text-3xl font-bold mb-2">Welcome to the Home Page</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">This is your starting point. Explore the app!</p>
            <Counter />
            <Button
                className="px-6 py-2 text-lg"
                onClick={() => {
                    window.location.href = "/about";
                }}
            >
                About Me Page
            </Button>

            {/* Bulbasaur */}
            <div className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center mt-6">
              {error ? (
                <span className="text-red-500 font-semibold">Oh no, there was an error</span>
              ) : isLoading ? (
                <span className="text-gray-500">Loading...</span>
              ) : data ? (
                <>
                  <h3 className="text-xl font-bold capitalize mb-2">{data.name}</h3>
                  <img
                    src={data?.sprites?.front_shiny}
                    alt={data.name}
                    className="w-24 h-24 object-contain mb-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">ID: {data.id}</span>
                </>
              ) : null}
            </div>
        </div>
    );
};

export default Home;