#include <X11/Xlib.h>
#include <X11/Xutil.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include "mouse_position.h"

static int _XlibErrorHandler(Display *display, XErrorEvent *event) {
  fprintf(stderr, "An error occured detecting the mouse position\n");
  return True;
}

struct Point mousePosition() {
  int numberOfScreens;
  int i;
  Bool result;
  Window *rootWindows;
  Window windowReturned;
  int winX, winY;
  unsigned int maskReturn;
  struct Point point;

  Display *display = XOpenDisplay(NULL);
  XEvent event;
  XSetErrorHandler(_XlibErrorHandler);

  numberOfScreens = XScreenCount(display);
  rootWindows = (Window *)malloc(sizeof(Window) * numberOfScreens);

  for (i = 0; i < numberOfScreens; i++) {
    rootWindows[i] = XRootWindow(display, i);
  }

  for (i = 0; i < numberOfScreens; i++) {
    result = XQueryPointer(
      display,
      rootWindows[i],
      &windowReturned,
      &windowReturned,
      &point.x,
      &point.y,
      &winX,
      &winY,
      &maskReturn
    );

    if (result == True) {
      break;
    }
  }

  if (result != True) {
    fprintf(stderr, "We could not found mouse");
    return point;
  }

  free(rootWindows);
  XCloseDisplay(display);

  return point;
}
