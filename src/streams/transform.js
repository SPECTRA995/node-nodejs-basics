const transform = async () => {
    process.stdin.on('data', data => process.stdout.write(data.reverse()));
};

await transform();