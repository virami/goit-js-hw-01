function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding) * 2;
    const borderWidth = Number.parseFloat(border) * 2;
    const totalWidth = contentWidth + paddingWidth + borderWidth;

    return totalWidth;
};

