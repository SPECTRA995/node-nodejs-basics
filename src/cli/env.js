const parseEnv = () => {
    const env = process.env;
    const rss = Object.keys(env).filter(key => key.startsWith("RSS_")).map(key => `${key}=${env[key]}`).join(",\n");
    console.log(rss); 
};

parseEnv();