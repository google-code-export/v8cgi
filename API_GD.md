# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_GD'>proper version of this page</a>.</b></font> #
# GD module #

Defined in file `gd.so` or `gd.dll`.

Classes: **Image**. For exact documentation, see http://libgd.org/Reference or http://www.boutell.com/gd/manual2.0.33.html

  * Constants:
    * Image.TRUECOLOR
    * Image.PALETTE
    * Image.MAXCOLORS
    * Image.TRUECOLOR
    * Image.JPEG
    * Image.PNG
    * Image.GIF
    * Image.ARC\_ARC
    * Image.ARC\_PIE
    * Image.ARC\_CHORD
    * Image.ARC\_NOFILL
    * Image.ARC\_EDGED
    * Image.COLOR\_ANTIALIASED
    * Image.COLOR\_BRUSHED
    * Image.COLOR\_STYLED
    * Image.COLOR\_STYLEDBRUSHED
    * Image.COLOR\_TILED
    * Image.COLOR\_TRANSPARENT

  * `var image = new Image(Image.TRUECOLOR | Image.PALETTE, w, h)`
  * `var image = new Image(Image.JPEG | Image.PNG | Image.GIF, file)`
  * `var data = image.save(Image.JPEG | Image.PNG | Image.GIF, [file])`
  * `image.destroy()`

  * `var color = Image.trueColor(r, g, b)`
  * `var color = Image.trueColorAlpha(r, g, b, a)`

  * `var color = image.colorAllocate(r, g, b)`
  * `var color = image.colorAllocateAlpha(r, g, b, a)`
  * `var color = image.colorClosest(r, g, b)`
  * `var color = image.colorClosestAlpha(r, g, b, a)`
  * `var color = image.colorClosestHWB(r, g, b)`
  * `var color = image.colorExact(r, g, b)`
  * `var color = image.colorResolve(r, g, b)`
  * `var color = image.colorResolveAlpha(r, g, b, a)`
  * `var color = image.colorsTotal()`
  * `var amount = image.red(color)`
  * `var amount = image.green(color)`
  * `var amount = image.blue(color)`
  * `var amount = image.alpha(color)`
  * `var bool = image.getInterlaced()`
  * `var color = image.getTransparent()`
  * `image = image.colorDeallocate(color)`
  * `image = image.colorTransparent(color)`
  * `var color = image.getPixel(x, y)`
  * `var bool = image.boundsSafe(x, y)`
  * `var w = image.sx()`
  * `var h = image.sy()`
  * `var bool = image.trueColor()`

  * `image = image.setPixel(x, y, color)`
  * `image = image.line(x1, y1, x2, y2, color)`
  * `image = image.polygon(points, color)` - points = [{x:,y:}, {x:,y:}, ...]
  * `image = image.openPolygon(points, color)`
  * `image = image.rectangle(x1, y1, x2, y2, color)`
  * `image = image.filledRectangle(x1, y1, x2, y2, color)`
  * `image = image.filledPolygon(points, color)`
  * `image = image.arc(cx, cy, w, h, s, e, color)`
  * `image = image.filledArc(cx, cy, w, h, s, e, color, style)`
  * `image = image.filledEllipse(cx, cy, w, h, color)`
  * `image = image.fillToBorder(x, y, border, color)`
  * `image = image.fill(x, y, color)`
  * `image = image.setAntialiased(color)`
  * `image = image.setAntialiasedDontBlend(color, color2)`
  * `image = image.setBrush(image2)`
  * `image = image.setTile(image2)`
  * `image = image.setStyle(arrayOfColors)`
  * `image = image.setThickness(thickness)`
  * `image = image.alphaBlending(flag)`
  * `image = image.saveAlpha(flag)`
  * `image = image.setClip(x1, y1, x2, y2)`
  * `var arr = image.getClip()`
  * `var bounds = image.string(color, fontfile, size, angle, x, y, text)`

  * `image = image.copy(sourceImage, dstx, dsty, srcx, srcy, w, h)`
  * `image = image.copyResized(sourceImage, dstx, dsty, srcx, srcy, dstw, dsth, srcw, srch)`
  * `image = image.copyResampled(sourceImage, dstx, dsty, srcx, srcy, dstw, dsth, srcw, srch)`
  * `image = image.copyRotated(sourceImage, dstx, dsty, srcx, srcy, srcw, srch, angle)`
  * `image = image.copyMerge(sourceImage, dstx, dsty, srcx, srcy, w, h, percent)`
  * `image = image.copyMergeGray(sourceImage, dstx, dsty, srcx, srcy, w, h, percent)`
  * `image = image.copyPalette(sourceImage)`
  * `image = image.squareToCircle(radius)`
  * `image = image.sharpen(percent)`