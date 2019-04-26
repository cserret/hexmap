import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const { Raphael, Paper, Set, Circle, Ellipse, Image, Rect, Text, Path, Line } = require('react-raphael');


class App extends Component {
    state = {
        paperWidth: 240,
        paperHeight: 150,
        hexesRender: []
    }

    componentDidMount = () => {
        console.log('componentDidMount');
        this.drawHexes();
    }

    drawHexes = () => {

        function dr(degrees) {
            var pi = Math.PI;
            return degrees * (pi / 180);
        }


        let hexes_horizontal = 15;
        let hexes_vertical = 10;
        let hexes_radius = 50;
        let hexes_diameter = 100;
        let hexesRender = [];
        let distanceToSide = ((hexes_radius / 2) * Math.sqrt(3)) ;

        let x = 0;
        let y = 0;
        let hex = { center: { x: 0, y: 0 }, circle: '', points: [], lines: '' };
        let count = 1000;
        let drawnLines = [];
        for (y = 0; y < hexes_vertical; y++) {
            for (x = 0; x < (hexes_horizontal / 2); x++) {
                hex.center.x = (x * (hexes_diameter + hexes_radius)) + hexes_radius;
                hex.center.y = (y * distanceToSide * 2) + hexes_radius;
                hex.circle = <Circle key={count} x={hex.center.x} y={hex.center.y} r={hexes_radius} attr={{ "fill": "#ffffff", "stroke": "#f5f5f5", "stroke-width": 1 }} />
                let point1 = { x: 0, y: 0 };
                point1.x = (hexes_radius * Math.sin(dr(330))) + hex.center.x;
                point1.y = (hexes_radius * Math.cos(dr(330))) + hex.center.y;
                hex.points.push(point1);
                let point2 = { x: 0, y: 0 };
                point2.x = (hexes_radius * Math.sin(dr(30))) + hex.center.x;
                point2.y = (hexes_radius * Math.cos(dr(30))) + hex.center.y;
                hex.points.push(point2);
                let point3 = { x: 0, y: 0 };
                point3.x = (hexes_radius * Math.sin(dr(90))) + hex.center.x;
                point3.y = (hexes_radius * Math.cos(dr(90))) + hex.center.y;
                hex.points.push(point3);
                let point4 = { x: 0, y: 0 };
                point4.x = (hexes_radius * Math.sin(dr(150))) + hex.center.x;
                point4.y = (hexes_radius * Math.cos(dr(150))) + hex.center.y;
                hex.points.push(point4);
                let point5 = { x: 0, y: 0 };
                point5.x = (hexes_radius * Math.sin(dr(210))) + hex.center.x;
                point5.y = (hexes_radius * Math.cos(dr(210))) + hex.center.y;
                hex.points.push(point5);
                let point6 = { x: 0, y: 0 };
                point6.x = (hexes_radius * Math.sin(dr(270))) + hex.center.x;
                point6.y = (hexes_radius * Math.cos(dr(270))) + hex.center.y;
                hex.points.push(point6);
                let drawnLineText = point1.x + ';' + point1.y + ';' + point2.x + ';' + point2.y;
                let doDrawLine = [];
                if( drawnLines.indexOf( drawnLineText ) === -1 ) {
                    drawnLines.push(drawnLineText);
                    doDrawLine.push( <Line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} attr={{"stroke":"#000"}} /> );
                }
                hex.lines = <Set key={count}>

                            <Line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} attr={{"stroke":"#000"}} />
                            <Line x1={point2.x} y1={point2.y} x2={point3.x} y2={point3.y} attr={{"stroke":"#000"}} />
                            <Line x1={point3.x} y1={point3.y} x2={point4.x} y2={point4.y} attr={{"stroke":"#000"}} />
                            <Line x1={point4.x} y1={point4.y} x2={point5.x} y2={point5.y} attr={{"stroke":"#000"}} />
                            <Line x1={point5.x} y1={point5.y} x2={point6.x} y2={point6.y} attr={{"stroke":"#000"}} />
                            <Line x1={point6.x} y1={point6.y} x2={point1.x} y2={point1.y} attr={{"stroke":"#000"}} />

                </Set>;

hexesRender.push({ ...hex });
count++;

                hex.center.x += hexes_radius + ( hexes_radius / 2 );
                hex.center.y += distanceToSide;
                hex.circle = <Circle key={count} x={hex.center.x} y={hex.center.y} r={hexes_radius} attr={{ "fill": "#ffffff", "stroke": "#f5f5f5", "stroke-width": 1 }} />
                point1.x = (hexes_radius * Math.sin(dr(330))) + hex.center.x;
                point1.y = (hexes_radius * Math.cos(dr(330))) + hex.center.y;
                hex.points.push(point1);
       
                point2.x = (hexes_radius * Math.sin(dr(30))) + hex.center.x;
                point2.y = (hexes_radius * Math.cos(dr(30))) + hex.center.y;
                hex.points.push(point2);
   
                point3.x = (hexes_radius * Math.sin(dr(90))) + hex.center.x;
                point3.y = (hexes_radius * Math.cos(dr(90))) + hex.center.y;
                hex.points.push(point3);
   
                point4.x = (hexes_radius * Math.sin(dr(150))) + hex.center.x;
                point4.y = (hexes_radius * Math.cos(dr(150))) + hex.center.y;
                hex.points.push(point4);

                point5.x = (hexes_radius * Math.sin(dr(210))) + hex.center.x;
                point5.y = (hexes_radius * Math.cos(dr(210))) + hex.center.y;
                hex.points.push(point5);
     
                point6.x = (hexes_radius * Math.sin(dr(270))) + hex.center.x;
                point6.y = (hexes_radius * Math.cos(dr(270))) + hex.center.y;
                hex.points.push(point6);
                hex.lines = <Set key={count}>
                <Line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} attr={{"stroke":"#000"}} />
                        <Line x1={point2.x} y1={point2.y} x2={point3.x} y2={point3.y} attr={{"stroke":"#000"}} />
                        <Line x1={point3.x} y1={point3.y} x2={point4.x} y2={point4.y} attr={{"stroke":"#000"}} />
                        <Line x1={point4.x} y1={point4.y} x2={point5.x} y2={point5.y} attr={{"stroke":"#000"}} />
                        <Line x1={point5.x} y1={point5.y} x2={point6.x} y2={point6.y} attr={{"stroke":"#000"}} />
                        <Line x1={point6.x} y1={point6.y} x2={point1.x} y2={point1.y} attr={{"stroke":"#000"}} />

            </Set>;

                hexesRender.push({ ...hex });
                count++;
            }

        }
        /*
                    <Circle key={'c' + count} x={point1.x} y={point1.y} r="2" attr={{ "fill": "#ff0000", "stroke": "#000000", "stroke-width": 1 }} />
                    <Circle key={'c' + count} x={point2.x} y={point2.y} r="2" attr={{ "fill": "#00ff00", "stroke": "#000000", "stroke-width": 1 }} />
                    <Circle key={'c' + count} x={point3.x} y={point3.y} r="2" attr={{ "fill": "#ff0000", "stroke": "#000000", "stroke-width": 1 }} />
                    <Circle key={'c' + count} x={point4.x} y={point4.y} r="2" attr={{ "fill": "#00ff00", "stroke": "#000000", "stroke-width": 1 }} />
                    <Circle key={'c' + count} x={point5.x} y={point5.y} r="2" attr={{ "fill": "#ff0000", "stroke": "#000000", "stroke-width": 1 }} />
                    <Circle key={'c' + count} x={point6.x} y={point6.y} r="2" attr={{ "fill": "#00ff00", "stroke": "#000000", "stroke-width": 1 }} />

                            <Line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} attr={{"stroke":"#000"}} />
                            <Line x1={point2.x} y1={point2.y} x2={point3.x} y2={point3.y} attr={{"stroke":"#000"}} />
                            <Line x1={point3.x} y1={point3.y} x2={point4.x} y2={point4.y} attr={{"stroke":"#000"}} />
                            <Line x1={point4.x} y1={point4.y} x2={point5.x} y2={point5.y} attr={{"stroke":"#000"}} />
                            <Line x1={point5.x} y1={point5.y} x2={point6.x} y2={point6.y} attr={{"stroke":"#000"}} />
                            <Line x1={point6.x} y1={point6.y} x2={point1.x} y2={point1.y} attr={{"stroke":"#000"}} />
                            */
        // for(let i=0; i<hexes_width; i++) {
        //     let x1 = i * 100;
        //     let y1 = 1;
        //     let x2 = (i * 100) + 100;
        //     let y2 = 1;
        //     hexesRender.push( <Line x1={x1} y1 = {y1} x2={x2} y2={y2} attr={{"stroke":"#000"}} />   );
        //     x1 = x2
        //     y1 = 1;
        //     x2 = x2
        //     y2 = 100;
        //     hexesRender.push( <Line x1={x1} y1 = {y1} x2={x2} y2={y2} attr={{"stroke":"#000"}} />   );
        // }
        this.setState({ hexesRender: hexesRender });
    }

    render() {
        var data = [
            { x: 50, y: 50, r: 40, attr: { "stroke": "#0b8ac9", "stroke-width": 5 }, animate: Raphael.animation({ cx: 60 }, 500, "<>") },
            { x: 100, y: 100, r: 40, attr: { "stroke": "#f0c620", "stroke-width": 5 }, animate: Raphael.animation({ cx: 105 }, 500, "<>") },
            { x: 150, y: 50, r: 40, attr: { "stroke": "#1a1a1a", "stroke-width": 5 } },
            { x: 200, y: 100, r: 40, attr: { "stroke": "#10a54a", "stroke-width": 5 }, animate: Raphael.animation({ cx: 195 }, 500, "<>") },
            { x: 250, y: 50, r: 40, attr: { "stroke": "#e11032", "stroke-width": 5 }, animate: Raphael.animation({ cx: 240 }, 500, "<>") }
        ]
        return (<Paper width={1300} height={1300}>
            <Set>
                {
                    data.map(function (ele, pos) {
                        return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate} />)
                    })
                }
            </Set>
            <Set>
                {this.state.hexesRender.map(function (hex) {
                    return hex.circle;
                })}
                {this.state.hexesRender.map(function (hex) {
                    return hex.lines;
                })}
            </Set>
        </Paper>)
    }
}

export default App;
/*
                            <Rect x={30} y={148} width={this.state.paperWidth} height={this.state.paperHeight} attr={{"fill":"#10a54a","stroke":"#f0c620","stroke-width":5}}/>
                            <Ellipse x={150} y={198} ry={40} rx={100} attr={{"fill":"#fff","stroke":"#e11032"}} glow={{width:10,fill:true,color:"#0b8ac9",opacity:1}}/>
                            <Image src="static/images/5circle.png" x={100} y={170} width={90} height={60} />
                            <Text x={150} y={258} text="同一个世界 同一个梦想" attr={{"fill":"#fff"}}/>
                            <Text x={150} y={273} text="One World One Dream" attr={{"fill":"#fff"}}/>
                            <Path d={["M150 287L150 287"]} animate={Raphael.animation({"path": ["M80 287L220 287"]},500,"<>")} attr={{"stroke":"#fff"}}/>
                            <Line x1={150} y1={290} x2={150} y2={290} animate={Raphael.animation({ x1:80, x2:220},500,"<>")} attr={{"stroke":"#fff"}}/>
                            */