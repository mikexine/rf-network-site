//Constants for the SVG
var width = 500,
    height = 500;

//Set up the colour scale
var color = d3.scale.category20();

//Set up the force layout
var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);

//Append a SVG to the body of the html page. Assign this SVG as an object to svg
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

//Read the data from the mis element 
var mis = '{"nodes": [{"name": "User 313", "group": 313}, {"name": "User 32036", "group": 32036}, {"name": "User 9931", "group": 9931}, {"name": "User 29661", "group": 29661}, {"name": "User 13948", "group": 13948}, {"name": "User 292", "group": 292}, {"name": "User 17188", "group": 17188}, {"name": "User 994", "group": 994}, {"name": "User 33392", "group": 33392}, {"name": "User 975", "group": 975}, {"name": "User 383", "group": 383}, {"name": "User 33113", "group": 33113}, {"name": "User 415", "group": 415}, {"name": "User 253", "group": 253}, {"name": "User 22774", "group": 22774}, {"name": "User 35", "group": 35}, {"name": "User 389", "group": 389}, {"name": "User 27490", "group": 27490}, {"name": "User 244", "group": 244}, {"name": "User 306", "group": 306}, {"name": "User 13534", "group": 13534}, {"name": "User 4566", "group": 4566}, {"name": "User 12923", "group": 12923}, {"name": "User 12149", "group": 12149}, {"name": "User 15962", "group": 15962}, {"name": "User 11442", "group": 11442}, {"name": "User 28593", "group": 28593}, {"name": "User 35403", "group": 35403}, {"name": "User 17820", "group": 17820}, {"name": "User 353", "group": 353}, {"name": "User 27023", "group": 27023}, {"name": "User 246", "group": 246}, {"name": "User 15837", "group": 15837}, {"name": "User 258", "group": 258}, {"name": "User 2116", "group": 2116}, {"name": "User 376", "group": 376}, {"name": "User 27", "group": 27}, {"name": "User 27073", "group": 27073}, {"name": "User 16835", "group": 16835}, {"name": "User 11037", "group": 11037}, {"name": "User 14141", "group": 14141}, {"name": "User 4567", "group": 4567}, {"name": "User 17404", "group": 17404}, {"name": "User 19088", "group": 19088}, {"name": "User 147", "group": 147}, {"name": "User 110", "group": 110}, {"name": "User 31005", "group": 31005}, {"name": "User 15614", "group": 15614}, {"name": "User 21519", "group": 21519}, {"name": "User 19187", "group": 19187}, {"name": "User 28115", "group": 28115}, {"name": "User 1874", "group": 1874}, {"name": "User 165", "group": 165}, {"name": "User 3511", "group": 3511}, {"name": "User 37795", "group": 37795}, {"name": "User 254", "group": 254}, {"name": "User 102", "group": 102}, {"name": "User 24248", "group": 24248}, {"name": "User 355", "group": 355}, {"name": "User 17360", "group": 17360}, {"name": "User 33836", "group": 33836}, {"name": "User 8806", "group": 8806}, {"name": "User 4198", "group": 4198}, {"name": "User 12758", "group": 12758}, {"name": "User 11578", "group": 11578}, {"name": "User 3929", "group": 3929}, {"name": "User 11434", "group": 11434}, {"name": "User 13227", "group": 13227}, {"name": "User 237", "group": 237}], "links": [{"source": 27, "target": 3511, "value": 53}, {"source": 27, "target": 8806, "value": 59}, {"source": 27, "target": 11037, "value": 51}, {"source": 27, "target": 31005, "value": 51}, {"source": 35, "target": 1874, "value": 54}, {"source": 35, "target": 2116, "value": 52}, {"source": 35, "target": 4566, "value": 51}, {"source": 35, "target": 11434, "value": 55}, {"source": 35, "target": 13534, "value": 51}, {"source": 35, "target": 15614, "value": 53}, {"source": 35, "target": 32036, "value": 52}, {"source": 102, "target": 4198, "value": 55}, {"source": 102, "target": 21519, "value": 51}, {"source": 102, "target": 35403, "value": 51}, {"source": 110, "target": 3929, "value": 62}, {"source": 147, "target": 17820, "value": 56}, {"source": 147, "target": 27490, "value": 51}, {"source": 147, "target": 33392, "value": 61}, {"source": 165, "target": 9931, "value": 60}, {"source": 237, "target": 13227, "value": 50}, {"source": 244, "target": 975, "value": 58}, {"source": 244, "target": 37795, "value": 65}, {"source": 246, "target": 994, "value": 100}, {"source": 246, "target": 12758, "value": 100}, {"source": 246, "target": 19187, "value": 100}, {"source": 246, "target": 28115, "value": 100}, {"source": 253, "target": 4566, "value": 51}, {"source": 254, "target": 15962, "value": 53}, {"source": 258, "target": 11442, "value": 100}, {"source": 292, "target": 4567, "value": 53}, {"source": 292, "target": 12923, "value": 53}, {"source": 292, "target": 13948, "value": 53}, {"source": 292, "target": 16835, "value": 60}, {"source": 292, "target": 17360, "value": 57}, {"source": 306, "target": 24248, "value": 52}, {"source": 313, "target": 15837, "value": 56}, {"source": 313, "target": 19088, "value": 53}, {"source": 313, "target": 22774, "value": 60}, {"source": 313, "target": 29661, "value": 52}, {"source": 353, "target": 14141, "value": 58}, {"source": 355, "target": 28593, "value": 52}, {"source": 376, "target": 11578, "value": 52}, {"source": 376, "target": 12149, "value": 54}, {"source": 376, "target": 17404, "value": 60}, {"source": 376, "target": 33836, "value": 54}, {"source": 383, "target": 27023, "value": 52}, {"source": 389, "target": 17188, "value": 54}, {"source": 389, "target": 33113, "value": 54}, {"source": 415, "target": 27073, "value": 53}]}';
graph = JSON.parse(mis);
console.log(graph);

//Creates the graph data structure out of the json data
force.nodes(graph.nodes)
    .links(graph.links)
    .start();

//Create all the line svgs but without locations yet
var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function (d) {
    return Math.sqrt(d.value);
});

//Do the same with the circles for the nodes - no 
var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 8)
    .style("fill", function (d) {
    return color(d.group);
})
    .call(force.drag)
    .on('dblclick', connectedNodes); //Added code

//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
force.on("tick", function () {
    link.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
        return d.source.y;
    })
        .attr("x2", function (d) {
        return d.target.x;
    })
        .attr("y2", function (d) {
        return d.target.y;
    });

    node.attr("cx", function (d) {
        return d.x;
    })
        .attr("cy", function (d) {
        return d.y;
    });
});

//---Insert-------

//Toggle stores whether the highlighting is on
var toggle = 0;

//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < graph.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
graph.links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});

//This function looks up whether a pair are neighbours  
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}

function connectedNodes() {

    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        node.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });
        
        link.style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
        });
        
        //Reduce the op
        
        toggle = 1;
    } else {
        //Put them back to opacity=1
        node.style("opacity", 1);
        link.style("opacity", 1);
        toggle = 0;
    }

}

//---End Insert---