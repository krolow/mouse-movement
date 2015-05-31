#include <X11/Xlib.h>
#include <X11/Xutil.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

static int _XlibErrorHandler(Display *display, XErrorEvent *event) {
  fprintf(stderr, "An error occured detecting the mouse position\n");
  return True;
}

int main(int argc, char* argv[])
{
  int numberOfScreens;
  int i;
  Bool result;
  Window *rootWindows;
  Window windowReturned;
  int rootX, rootY, latestRootY, latestRootX;
  int winX, winY;
  unsigned int maskReturn;
  Bool hasChanged;

  Display *display = XOpenDisplay(NULL);
  XEvent event;

  XSetErrorHandler(_XlibErrorHandler);

  while (True) {
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
        &rootX,
        &rootY,
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
      return -1;
    }


    hasChanged = False;

    if (rootX != latestRootX) {
      hasChanged = True;
      latestRootX = rootX;
    }

    if (rootY != latestRootY) {
      hasChanged = True;
      latestRootY = rootY;
    }

    if (hasChanged) {
      printf("Mouse is at (%d, %d)\n", rootX, rootY);
    }
  }

  free(rootWindows);
  XCloseDisplay(display);

  return 0;
}
