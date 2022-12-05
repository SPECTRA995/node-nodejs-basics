const parseArgs = () => {
    const args = process.argv;
    console.log(args);
    const filterArgs = args.filter(arg => arg.startsWith('--'));
    const updateArgs = filterArgs.map(arg => {
        const index = args.indexOf(arg);
        const value = args[index + 1];
        return `${arg.slice(2)} is ${value}`;
    });
    console.log(updateArgs.join(',\n'));
};

parseArgs();