function valueToPoint(value, index, total) {
    let angle = (Math.PI * 2 / total) * -index;
    let tx = value * Math.cos(angle);
    let ty = value * Math.sin(angle);
    return { 'tx': tx, 'ty': ty };
}

export default valueToPoint;