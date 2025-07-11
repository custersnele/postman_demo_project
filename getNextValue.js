const fs = require('fs');
const csv = require('csv-parser');

const values = [];
fs.createReadStream('possible_values.csv')
    .pipe(csv({ delimiter: ",", from_line: 1 }))
    .on('data', row => values.push(row.value))
    .on('end', () => {
        const counter = JSON.parse(fs.readFileSync('counter.json'));
        const index = counter.index;
        console.log(index);
        console.log(values);
        const nextValue = values[index];

        console.log(`echo "next_value=${nextValue}" >> $GITHUB_OUTPUT`);

        // Increment counter for next run
        const newIndex = (index + 1) % values.length;
        fs.writeFileSync('counter.json', JSON.stringify({ index: newIndex }, null, 2));
    });
