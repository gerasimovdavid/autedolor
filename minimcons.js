let legends = [];

function legendLayout(view, mark) {
    return {
        view: view,
        mark: mark,
        layout: {
            // Example layout settings
            position: 'right',
            title: 'Legend'
        }
    };
}

let view = { width: 800, height: 600 };
let mark = { type: 'circle', color: 'blue' };

legends.push(legendLayout(view, mark));

console.log(legends);
// Output might look like:
// [
//   {
//     view: { width: 800, height: 600 },
//     mark: { type: 'circle', color: 'blue' },
//     layout: { position: 'right', title: 'Legend' }
//   }
// ]
