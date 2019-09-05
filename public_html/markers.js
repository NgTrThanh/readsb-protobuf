// Part of readsb, a Mode-S/ADSB/TIS message decoder.
//
// markers.js: Aircraft markers shown on map.
//
// Copyright (c) 2019 Michael Wolf <michael@mictronics.de>
//
// This code is based on a detached fork of dump1090-fa.
//
// This file is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.
//
// This file is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
// Declare ICAO registration address ranges and Country

// FA icons
const Shapes = {
  airliner: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26" width="25px" height="26px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>airliner_live</title><g id="Layer_2" data-name="Layer 2"><g id="Airliner"><path class="cls-1" d="M12.51,25.75c-.26,0-.74-.71-.86-1.41l-3.33.86L8,25.29l.08-1.41.11-.07c1.13-.68,2.68-1.64,3.2-2-.37-1.06-.51-3.92-.43-8.52v0L8,13.31C5.37,14.12,1.2,15.39,1,15.5a.5.5,0,0,1-.21,0,.52.52,0,0,1-.49-.45,1,1,0,0,1,.52-1l1.74-.91c1.36-.71,3.22-1.69,4.66-2.43a4,4,0,0,1,0-.52c0-.69,0-1,0-1.14l.25-.13H7.16A1.07,1.07,0,0,1,8.24,7.73,1.12,1.12,0,0,1,9.06,8a1.46,1.46,0,0,1,.26.87L9.08,9h.25c0,.14,0,.31,0,.58l1.52-.84c0-1.48,0-7.06,1.1-8.25a.74.74,0,0,1,1.13,0c1.15,1.19,1.13,6.78,1.1,8.25l1.52.84c0-.32,0-.48,0-.58l.25-.13H15.7A1.46,1.46,0,0,1,16,8a1.11,1.11,0,0,1,.82-.28,1.06,1.06,0,0,1,1.08,1.16V9c0,.19,0,.48,0,1.17a4,4,0,0,1,0,.52c1.75.9,4.4,2.29,5.67,3l.73.38a.9.9,0,0,1,.5,1,.55.55,0,0,1-.5.47h0l-.11,0c-.28-.11-4.81-1.49-7.16-2.2H14.06v0c.09,4.6-.06,7.46-.43,8.52.52.33,2.07,1.29,3.2,2l.11.07L17,25.29l-.33-.09-3.33-.86c-.12.7-.6,1.41-.86,1.41h0Z"/><path class="cls-2" d="M12.51.5C13.93.5,14,7,13.93,8.91c.3.16,1.64.91,2,1.1,0-.6,0-.85,0-1s0-.09,0-.13a1.18,1.18,0,0,1,.19-.7A.88.88,0,0,1,16.78,8h0a.82.82,0,0,1,.83.91s0,.07,0,.13,0,.44,0,1.17a3.21,3.21,0,0,1-.06.66c2.33,1.19,6.51,3.39,6.56,3.42.59.3.4,1,.11,1h-.07c-.37-.14-7.18-2.21-7.18-2.21l-3.18,0c0,.22.22,7.56-.48,8.91,0,0,2,1.26,3.39,2.08l.06.93L13.15,24a2.14,2.14,0,0,1-.64,1.47A2.14,2.14,0,0,1,11.87,24L8.26,25,8.31,24c1.38-.82,3.39-2.08,3.39-2.08-.7-1.35-.48-8.69-.48-8.91L8,13.06S1.17,15.13.86,15.27l-.11,0c-.32,0-.43-.73.14-1S5.13,12,7.46,10.85a3.21,3.21,0,0,1-.06-.66c0-.73,0-1,0-1.17s0-.09,0-.13A.82.82,0,0,1,8.24,8h0a.88.88,0,0,1,.65.21,1.18,1.18,0,0,1,.19.7s0,.07,0,.13,0,.39,0,1c.36-.19,1.71-.94,2-1.1C11.05,7,11.09.5,12.51.5m0-.5a1,1,0,0,0-.74.34c-1.16,1.2-1.2,6.3-1.18,8.28L10,8.93l-.46.25V8.91a1.68,1.68,0,0,0-.33-1.06,1.34,1.34,0,0,0-1-.36,1.31,1.31,0,0,0-1.33,1.4V9h0v0c0,.16,0,.46,0,1.14,0,.13,0,.26,0,.38l-4.5,2.35-1.74.91A1.2,1.2,0,0,0,0,15.15a.77.77,0,0,0,.73.64.74.74,0,0,0,.31-.07c.29-.12,4.35-1.35,7-2.17l2.6,0c-.1,5.54.17,7.46.38,8.2-.64.4-2,1.25-3,1.86l-.22.13,0,.26-.06.93,0,.81.7-.31,3.06-.79c.19.67.63,1.35,1,1.35s.86-.68,1-1.35l3.06.79.7.31,0-.81L17.2,24l0-.26L17,23.6c-1-.61-2.4-1.47-3-1.86.21-.74.48-2.66.38-8.2l2.6,0c2.72.83,6.81,2.07,7.07,2.18a.68.68,0,0,0,.25,0,.79.79,0,0,0,.74-.67,1.15,1.15,0,0,0-.63-1.29l-.71-.37c-1.23-.65-3.78-2-5.53-2.88,0-.12,0-.25,0-.38,0-.67,0-1,0-1.14h0V8.92a1.32,1.32,0,0,0-1.32-1.44,1.35,1.35,0,0,0-1,.36,1.67,1.67,0,0,0-.33,1V9h0v.22L15,8.93l-.57-.32c0-2,0-7.08-1.18-8.28A1,1,0,0,0,12.51,0Z"/></g></g></svg>',
    size: [25, 26],
  },
  balloon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 13" width="9px" height="13px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>balloon_live</title><g id="Layer_2" data-name="Layer 2"><g id="Balloon"><path class="cls-1" d="M3.56,12.75a.49.49,0,0,1-.46-.34L2.63,11a.51.51,0,0,1,.07-.44l.1-.1-2-3.68a.48.48,0,0,1-.05-.17,4.39,4.39,0,0,1-.48-2A4.29,4.29,0,0,1,4.5.25,4.29,4.29,0,0,1,8.75,4.58a4.39,4.39,0,0,1-.48,2,.45.45,0,0,1-.05.17l-2,3.68a.44.44,0,0,1,.1.1.51.51,0,0,1,.07.45L5.9,12.41a.49.49,0,0,1-.46.34Zm1.6-2.43L6.1,8.59A4.22,4.22,0,0,1,5,8.88v1.44ZM4,10.32V8.88A4.22,4.22,0,0,1,2.9,8.59l.94,1.73Z"/><path class="cls-2" d="M4.5.51a4,4,0,0,1,4,4.07A4.1,4.1,0,0,1,8,6.5a.24.24,0,0,1,0,.11l-2.16,4h.07a.23.23,0,0,1,.19.1.24.24,0,0,1,0,.22l-.47,1.44a.24.24,0,0,1-.22.16H3.56a.24.24,0,0,1-.22-.16l-.47-1.44a.24.24,0,0,1,0-.22.23.23,0,0,1,.19-.1h.07L1,6.62A.24.24,0,0,1,1,6.5,4.1,4.1,0,0,1,.5,4.58,4,4,0,0,1,4.5.51m.24,10.06H5.3L6.73,8a3.93,3.93,0,0,1-2,.68v1.93m-1,0h.57V8.64a3.93,3.93,0,0,1-2-.68L3.7,10.57M4.5,0A4.55,4.55,0,0,0,0,4.58,4.65,4.65,0,0,0,.49,6.66a.72.72,0,0,0,.07.21l1.92,3.52a.76.76,0,0,0-.09.66l.47,1.44a.74.74,0,0,0,.7.51H5.44a.74.74,0,0,0,.7-.51l.47-1.44a.76.76,0,0,0-.09-.66L8.44,6.86a.72.72,0,0,0,.07-.21A4.65,4.65,0,0,0,9,4.58,4.55,4.55,0,0,0,4.5,0Zm.74,9.1L5.57,9l-.34.62V9.1Zm-1.47.55L3.43,9l.34.07v.55Z"/></g></g></svg>',
    size: [9, 13],
    noRotate: true,
  },
  cessna: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 13" width="17px" height="13px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>cessna_live</title><g id="Layer_2" data-name="Layer 2"><g id="Cessna"><path class="cls-1" d="M8.51,12.75c-.17,0-2-.27-2.56-.35A.41.41,0,0,1,5.6,12V10.87a.41.41,0,0,1,.32-.4l1.81-.37L7.36,6.64H4.75L.6,6a.41.41,0,0,1-.35-.41V4a.41.41,0,0,1,.38-.41l4.09-.28h2.6v-.4l.25,0-.24-.08c0-.21.1-.76.12-1.06A.9.9,0,0,1,8,.94L8.12.54A.41.41,0,0,1,8.5.25a.4.4,0,0,1,.39.29L9,.95a.91.91,0,0,1,.53.75c0,.33.11,1,.13,1.11v.46h2.57l4.12.28a.41.41,0,0,1,.38.41V5.63A.41.41,0,0,1,16.4,6l-4.1.59H9.64L9.26,10.1l1.81.36a.41.41,0,0,1,.32.4V12a.41.41,0,0,1-.34.41c-.56.08-2.37.35-2.55.35Z"/><path class="cls-2" d="M8.5.5a.15.15,0,0,1,.15.11l.16.52a.68.68,0,0,1,.49.58c0,.34.11,1,.13,1.12a.16.16,0,0,1,0,0v.65h2.83l4.09.28A.16.16,0,0,1,16.5,4V5.63a.16.16,0,0,1-.13.16l-4.1.59H9.41L9,10.3l2,.41a.16.16,0,0,1,.12.16V12a.16.16,0,0,1-.13.16s-2.33.35-2.51.35h0c-.17,0-2.53-.35-2.53-.35A.16.16,0,0,1,5.85,12V10.87A.16.16,0,0,1,6,10.71l2-.41L7.59,6.39H4.73L.63,5.79A.16.16,0,0,1,.5,5.63V4A.16.16,0,0,1,.64,3.8l4.09-.28H7.57V2.87a.21.21,0,0,1,0,0c0-.15.1-.79.13-1.12a.68.68,0,0,1,.49-.58L8.36.61A.16.16,0,0,1,8.5.5m0-.5a.66.66,0,0,0-.62.46l-.1.32a1.13,1.13,0,0,0-.58.9c0,.31-.1.87-.12,1.06a.92.92,0,0,0,0,.14V3H4.75L.61,3.3A.66.66,0,0,0,0,4V5.63a.66.66,0,0,0,.56.65l4.1.59H7.14l.33,3-1.59.32a.66.66,0,0,0-.53.65V12a.66.66,0,0,0,.54.65C7,12.81,8.34,13,8.51,13s1.5-.19,2.58-.35a.66.66,0,0,0,.56-.65V10.87a.66.66,0,0,0-.52-.65L9.54,9.9l.33-3h2.48l4.1-.59A.66.66,0,0,0,17,5.63V4a.66.66,0,0,0-.61-.66L12.3,3H9.93V2.74c0-.11-.09-.74-.12-1.06a1.14,1.14,0,0,0-.57-.9L9.13.46A.65.65,0,0,0,8.5,0Z"/></g></g></svg>',
    size: [17, 13],
  },
  heavy_2e: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" width="28px" height="29px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>heavy_2e_live</title><g id="Layer_2" data-name="Layer 2"><g id="Heavy_2_Eng" data-name="Heavy 2 Eng"><path class="cls-1" d="M9,28.35c0-.16-.17-1,.23-1.36.65-.59,2.82-2.38,3.4-2.86-.51-1.33-.59-5.15-.57-8.22L10,16,.25,19v-.34a1.78,1.78,0,0,1,.82-1.5l7.78-5.07a4.87,4.87,0,0,1-.51-3l0-.22.23,0h2.26l0,.22a8.32,8.32,0,0,1,0,1.81l1.21-.81c0-6.79.18-9.58,1.91-9.87,1.7.14,2,3,2,9.85L17.3,11a8.3,8.3,0,0,1,0-1.8l0-.22h2.51v.24a4.87,4.87,0,0,1-.51,3l7.66,5a1.77,1.77,0,0,1,.8,1.5V19L18,16l-2-.06c0,3.06-.06,6.88-.57,8.21a28.87,28.87,0,0,1,3.5,3A2,2,0,0,1,19,28.34l-.05.31L14.6,26.71c-.14,1.85-.41,1.85-.6,1.85s-.47,0-.6-1.84L9,28.66Z"/><path class="cls-2" d="M14,.5c1.43.13,1.69,3,1.69,9.73l2.06,1.39a5.43,5.43,0,0,1-.24-2.39h2s.26,2.07-.62,3c0,0,7.84,5.12,7.9,5.15a1.54,1.54,0,0,1,.68,1.28l-9.46-3-2.35-.08c0,.23.13,7.12-.62,8.54a34.46,34.46,0,0,1,3.59,3.08,1.86,1.86,0,0,1,.1,1l-4.39-2c-.07,1.16-.21,2-.38,2s-.31-.81-.38-2l-4.4,2s-.17-.84.16-1.13c.74-.67,3.54-3,3.54-3-.75-1.43-.62-8.31-.62-8.54L10,15.73l-9.46,3a1.54,1.54,0,0,1,.68-1.28c.06,0,8-5.24,8-5.24-.88-1-.62-3-.62-3h2a5.43,5.43,0,0,1-.24,2.39l1.91-1.28c0-6.74.17-9.5,1.7-9.76M14,0h-.06C12,.33,11.81,3,11.8,10l-.66.44a9.35,9.35,0,0,0,0-1.33l0-.45h-3v.49A5.4,5.4,0,0,0,8.52,12L.93,17A2.06,2.06,0,0,0,0,18.69v.68l.64-.2L10,16.23l1.77-.06c0,4.05.15,6.7.53,7.88-.73.6-2.67,2.21-3.28,2.76a1.82,1.82,0,0,0-.31,1.59l.12.6.56-.24,3.76-1.67c.14,1.43.39,1.72.82,1.72s.68-.29.82-1.73l3.75,1.67.58.25.11-.62A2.23,2.23,0,0,0,19.09,27a25.35,25.35,0,0,0-3.42-3c.37-1.19.55-3.83.52-7.87l1.77.06,9.39,2.94.64.2v-.68A2,2,0,0,0,27,17l-7.42-4.84A5.45,5.45,0,0,0,20,9.21l0-.45-.45,0H17.06l0,.45a9.35,9.35,0,0,0,0,1.33L16.18,10c0-7.21-.34-9.81-2.14-10Z"/></g></g></svg>',
    size: [28, 29],
  },
  heavy_4e: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 30" width="28px" height="30px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>heavy_4e_live</title><g id="Layer_2" data-name="Layer 2"><g id="Heavy_4_Eng" data-name="Heavy 4 Eng"><path class="cls-1" d="M14,29.62c-.23,0-.52-.16-.71-1.33L8.82,29.58V28l3.56-3.52c-.41-1.51-.4-7.57-.4-9.11L8.46,16.59,1.27,20.76l-1,1.68,0-.91c0-2.28.23-2.45.3-2.52s.59-.51,3.5-3.09A10.47,10.47,0,0,1,4,13l0-.22.23,0H6.16v.23a11.63,11.63,0,0,1,0,1.26c.74-.68,1.36-1.28,1.69-1.61a9.54,9.54,0,0,1-.16-3.15l0-.22.23-.05H9.87v.23a11.49,11.49,0,0,1,0,1.31l.87-.84c.67-.66,1.06-1,1.27-1.19,0-6.24.53-8.46,2-8.46,1.23,0,2,1.42,2,8.46.21.17.59.53,1.27,1.19l.88.85a11.45,11.45,0,0,1,0-1.32V9.19h2.18v.24a9.53,9.53,0,0,1-.15,3.18c.33.32.95.93,1.69,1.61a11.5,11.5,0,0,1,0-1.27v-.23H24V13a10.49,10.49,0,0,1-.1,3L27.4,19c.09.09.28.26.32,2.54l0,.91-1-1.68L19.5,16.57,16,15.34c0,1.53.07,7.49-.39,9.11L19.18,28v1.61l-4.46-1.29C14.52,29.46,14.23,29.62,14,29.62Z"/><path class="cls-2" d="M14,.49c1.08,0,1.75,1.61,1.75,8.34.27.14,2.06,2,2.73,2.54a9,9,0,0,1-.11-1.94h1.7a9.4,9.4,0,0,1-.19,3.25c.37.37,1.26,1.24,2.3,2.17a9.25,9.25,0,0,1-.1-1.89h1.7A10.3,10.3,0,0,1,23.66,16c1.81,1.61,3.57,3.16,3.6,3.18a11.25,11.25,0,0,1,.22,2.35l-.57-1-7.28-4.22L15.76,15s.15,8-.41,9.52l3.59,3.55v1.18L14.51,28c-.11.85-.3,1.4-.51,1.4s-.4-.55-.51-1.39L9.06,29.26V28.07l3.59-3.55c-.51-1.28-.43-9.52-.43-9.52L8.37,16.36,1.1,20.58l-.57,1a11.25,11.25,0,0,1,.22-2.35S2.53,17.61,4.35,16a10.32,10.32,0,0,1-.12-3h1.7a9.29,9.29,0,0,1-.1,1.88c1-.93,1.93-1.8,2.3-2.17a9.43,9.43,0,0,1-.19-3.24h1.7a9,9,0,0,1-.11,1.93C10.21,10.8,12,9,12.25,8.83c0-6.73.62-8.34,1.75-8.34M14,0c-1.65,0-2.23,2.17-2.24,8.59-.22.19-.57.52-1.19,1.13l-.43.42c0-.4,0-.7,0-.73l0-.46H7.45v.49a10.3,10.3,0,0,0,.12,3.11c-.27.26-.67.65-1.15,1.1,0-.38,0-.67,0-.7l0-.46H3.74v.49a11.18,11.18,0,0,0,.07,2.88L.49,18.76h0l-.06.06c-.14.13-.33.31-.38,2.69l0,1.83.94-1.56.51-.84L8.58,16.8l3.16-1.12a65.92,65.92,0,0,0,.37,8.69L8.72,27.72l-.15.14V30l.65-.28,3.87-1.11c.18.88.46,1.26.9,1.26s.73-.39.91-1.27l3.86,1.12.65.28V27.87l-.15-.14-3.38-3.35a58.1,58.1,0,0,0,.36-8.69l3.16,1.11,7.13,4.14.51.84L28,23.35l0-1.83c0-2.38-.24-2.56-.38-2.69l-.06-.06h0L24.2,15.84A11.19,11.19,0,0,0,24.27,13v-.49H21.61l0,.46s0,.32,0,.7c-.48-.45-.88-.84-1.15-1.1a10.29,10.29,0,0,0,.13-3.1V8.94H17.9l0,.46s0,.33,0,.74l-.44-.43c-.62-.61-1-.94-1.19-1.13C16.23,2.25,15.63,0,14,0Z"/></g></g></svg>',
    size: [28, 30],
  },
  helicopter: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" width="16px" height="18px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>helicopter_live</title><g id="Layer_2" data-name="Layer 2"><g id="Roto"><path class="cls-1" d="M8,17.75c-1.38,0-2.46-.63-2.46-1.43,0-.6.58-1.1,1.49-1.32V12.06A5.27,5.27,0,0,1,6,9.53L1.1,13.6l-.75-1L5.78,8.09c0-.25,0-.51,0-.77a12.28,12.28,0,0,1,.09-1.49L.38,1.24l.7-.89,5,4.2C6.48,3,7.17,2.1,8,2.1s1.52,1,1.91,2.57l5-4.21.75,1L10.1,6.07a12.4,12.4,0,0,1,.06,1.24c0,.22,0,.44,0,.65l5.47,4.59-.7.89L10,9.31a8.44,8.44,0,0,1-.35,1.4,3.83,3.83,0,0,1-.55,1.11L9,12v3c.91.22,1.49.72,1.49,1.32C10.46,17.12,9.38,17.75,8,17.75Z"/><path class="cls-2" d="M1.12.71,6.23,5c.33-1.57,1-2.65,1.73-2.65S9.4,3.48,9.72,5.12L14.87.82l.45.57L9.84,6a12.18,12.18,0,0,1,.08,1.35c0,.26,0,.51,0,.76l5.38,4.51-.39.5L9.82,8.84a8.75,8.75,0,0,1-.41,1.78,3.58,3.58,0,0,1-.52,1l-.18.22V15.2c.87.16,1.49.6,1.49,1.11S9.22,17.5,8,17.5,5.78,17,5.78,16.32s.62-1,1.49-1.11V12A5.26,5.26,0,0,1,6.13,9.07l-5,4.18-.45-.57L6,8.2c0-.29,0-.58,0-.89a12,12,0,0,1,.1-1.59L.73,1.21l.39-.5M1,0,.74.39.35.89,0,1.28l.38.32L5.59,5.94a12.64,12.64,0,0,0-.07,1.38c0,.21,0,.43,0,.66L.38,12.28,0,12.6.31,13l.45.57.31.39.38-.32L5.81,10a5.18,5.18,0,0,0,1,2.18V14.8c-.92.27-1.49.84-1.49,1.51C5.3,17.28,6.46,18,8,18s2.7-.72,2.7-1.68c0-.67-.57-1.24-1.49-1.51V12.07L9.29,12a4.06,4.06,0,0,0,.58-1.18,8,8,0,0,0,.28-1l4.42,3.71.38.32.31-.39.39-.5.31-.39-.38-.32L10.39,7.85c0-.17,0-.35,0-.53,0-.37,0-.75-.05-1.13l5.26-4.4L16,1.47l-.31-.39L15.25.5,14.94.11l-.38.32L10,4.23C9.57,2.73,8.83,1.85,8,1.85s-1.57.83-2,2.27L1.42.32,1,0Z"/></g></g></svg>',
    size: [16, 18],
  },
  hi_perf: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21" width="15px" height="21px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>hi_perf_live</title><g id="Layer_2" data-name="Layer 2"><g id="Hi_Perf" data-name="Hi Perf"><path class="cls-1" d="M3.14,20.76v-1.6l2.57-1.7V16.1H.26V12.25H1.61v1.17L5.28,9.9c.14-1.16,1-8.19,2-9.3L7.5.38l.2.22c1,1.12,1.89,8.14,2,9.3l3.67,3.52V12.25h1.35V16.1H9.29v1.35l2.57,1.7v1.6Z"/><path class="cls-2" d="M7.5.76c1,1.12,2,9.26,2,9.26l4.17,4V12.5h.84v3.36H9v1.72l2.57,1.7v1.23H3.4V19.28L6,17.58V15.86H.51V12.5h.84V14l4.17-4s1-8.13,2-9.26M7.5,0,7.11.44C6.11,1.58,5.24,8.09,5,9.79l-3.17,3V12H0v4.34H5.45v1L3.11,18.88,2.89,19v2h9.23V19l-.22-.15L9.55,17.32v-1H15V12H13.14v.82L10,9.79C9.76,8.09,8.89,1.58,7.89.44L7.5,0Z"/></g></g></svg>',
    size: [15, 21],
  },
  jet_nonswept: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18px" height="18px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>jet_nonswept_live</title><g id="Layer_2" data-name="Layer 2"><g id="Bizjet_Non-Swept" data-name="Bizjet Non-Swept"><path class="cls-1" d="M9,17.09l-3.51.61v-.3c0-.65.11-1,.33-1.09L8.5,15a5.61,5.61,0,0,1-.28-1.32l-.53-.41-.1-.69H7.12l0-.21a7.19,7.19,0,0,1-.15-2.19L.24,9.05V8.84c0-1.1.51-1.15.61-1.15L7.8,7.18V2.88C7.8.64,8.89.3,8.93.28L9,.26l.07,0s1.13.36,1.13,2.6v4.3l7,.51c.09,0,.59.06.59,1.15v.21l-6.69,1.16a7.17,7.17,0,0,1-.15,2.19l0,.21h-.47l-.1.69-.53.41A5.61,5.61,0,0,1,9.5,15l2.74,1.28c.2.07.31.43.31,1.08v.3Z"/><path class="cls-2" d="M9,.53s1,.28,1,2.35V7.41l7.19.53h0s.36,0,.36.9L10.78,10a5,5,0,0,1-.1,2.35H10.2l-.12.8-.54.42a4.88,4.88,0,0,1-.35,1.59l2.95,1.38s.16.06.17.85L9,16.84l-3.31.56c0-.79.17-.85.17-.85l2.95-1.38a4.88,4.88,0,0,1-.35-1.59l-.54-.42-.12-.8H7.32A5,5,0,0,1,7.22,10L.49,8.84c0-.88.33-.9.36-.9h0L8,7.41V2.88C8,.81,9,.53,9,.53M9,0,8.87,0c-.13,0-1.31.45-1.31,2.84V6.94L.82,7.43h0c-.24,0-.82.19-.82,1.4v.43l.41.07,6.26,1.08a8.45,8.45,0,0,0,.18,2l.08.41h.47l.05.37,0,.21.16.12.36.28a5.87,5.87,0,0,0,.22,1.05L5.66,16.09c-.39.15-.45.78-.46,1.31V18l.57-.1L9,17.35l3.23.55.57.1v-.6c0-.53-.06-1.16-.49-1.32L9.79,14.9A5.87,5.87,0,0,0,10,13.85l.36-.28.16-.12,0-.21.05-.37h.47l.08-.41a8.45,8.45,0,0,0,.18-2l6.26-1.08L18,9.27V8.84c0-1.34-.71-1.41-.85-1.41l-6.71-.49V2.88C10.44.49,9.27.08,9.13,0L9,0Z"/></g></g></svg>',
    size: [18, 18],
  },
  jet_swept: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24" width="18px" height="24" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>jet_swept_live</title><g id="Layer_2" data-name="Layer 2"><g id="Bizjet_Swept" data-name="Bizjet Swept"><path class="cls-1" d="M9.44,23c-.1.6-.35.6-.44.6s-.34,0-.44-.6l-3,.67V22.6A.54.54,0,0,1,6,22.05l2.38-1.12L8,19.33H6.69l0-.2a8.23,8.23,0,0,1-.14-3.85l.06-.18H7.73V13.19h-2L.26,14.29v-.93c0-.28.07-.46.22-.53l7.25-3.6V3.85A4.47,4.47,0,0,1,8.83.49L9,.34l.17.15a4.47,4.47,0,0,1,1.1,3.36V9.23l7.25,3.6c.14.07.22.25.22.53v.93l-5.51-1.1h-2V15.1h1.17l.06.18a8.24,8.24,0,0,1-.15,3.84l0,.2H10l-.36,1.6,2.43,1.14a.52.52,0,0,1,.35.53v1.08Z"/><path class="cls-2" d="M9,.68a4.25,4.25,0,0,1,1,3.16V9.39l7.4,3.67s.07,0,.07.3V14l-5.2-1H10v2.42h1.24a8,8,0,0,1-.15,3.72H9.79l-.45,2L12,22.3a.28.28,0,0,1,.2.3v.76l-3-.66s0,.66-.21.66-.21-.66-.21-.66l-3,.66V22.6a.28.28,0,0,1,.2-.3l2.62-1.23-.45-2H6.9a8,8,0,0,1-.15-3.72H8V12.93H5.71L.52,14v-.62c0-.26.07-.3.07-.3L8,9.39V3.85A4.25,4.25,0,0,1,9,.68M9,0,8.66.3A4.73,4.73,0,0,0,7.47,3.85V9.07L.36,12.6c-.16.08-.36.28-.36.76V14.6l.62-.12,5.15-1h1.7v1.4H6.36l-.11.36a8.49,8.49,0,0,0,.14,4l.09.4H7.79l.27,1.2-2.21,1a.79.79,0,0,0-.53.78V24l.63-.14,2.42-.54c.12.37.33.55.63.55s.51-.19.63-.55l2.42.54.63.14V22.6a.79.79,0,0,0-.53-.78l-2.21-1,.27-1.2h1.31l.09-.4a8.49,8.49,0,0,0,.14-4l-.11-.36H10.53v-1.4h1.7l5.15,1,.62.12V13.36c0-.48-.2-.68-.36-.76L10.53,9.07V3.85A4.73,4.73,0,0,0,9.34.3L9,0Z"/></g></g></svg>',
    size: [18, 24],
  },
  twin_large: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" width="21px" height="20px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>twin_large_live</title><g id="Layer_2" data-name="Layer 2"><g id="Twinprop_Large" data-name="Twinprop Large"><path class="cls-1" d="M10.1,18.34H7l0-.21c-.08-.54,0-.87.11-1L7.19,17l.2,0,2.35-.33c-.16-.82-.42-2.9-.42-3.14s0-2.71,0-3.51H8c-.12,1.34-.41,1.36-.55,1.37h0c-.19,0-.46,0-.6-1.55L.27,9.52l0-.25c.06-.73.31-.9.45-.93l6-.48a3.65,3.65,0,0,1,.3-2,.45.45,0,0,1,.32-.16h0a.39.39,0,0,1,.3.12A3.67,3.67,0,0,1,8,7.77l1.26-.07c0-.71,0-2.92,0-4.48A3.84,3.84,0,0,1,10.1.4a.4.4,0,0,1,.28-.16h.23A.4.4,0,0,1,10.9.4a3.84,3.84,0,0,1,.87,2.81c0,1.55,0,3.77,0,4.48L13,7.77a3.67,3.67,0,0,1,.29-1.94.38.38,0,0,1,.28-.12.46.46,0,0,1,.34.16,3.66,3.66,0,0,1,.3,2l6,.48c.18,0,.43.21.49.94l0,.25-6.53.3c-.14,1.55-.42,1.55-.59,1.55s-.45,0-.57-1.37H11.74c0,.8,0,3.27,0,3.51s-.26,2.32-.42,3.14l2.38.34h.11l.13.13c.15.18.19.51.11,1l0,.21H10.9l-.4,1Z"/><path class="cls-2" d="M10.61.49a3.28,3.28,0,0,1,.91,2.72c0,1.89,0,4.71,0,4.71l1.76.1s-.1-2.08.32-2.08h0c.52,0,.37,2.13.37,2.13l6.22.49s.21.05.26.71l-6.5.3s-.11,1.54-.36,1.54h0c-.25,0-.34-1.37-.34-1.37l-1.78,0s-.05,3.48-.05,3.76A33,33,0,0,1,11,16.84l2.65.37h0s.26,0,.14.89h-3l-.23.58-.23-.58h-3c-.12-.85.1-.89.14-.89h0L10,16.84a33,33,0,0,1-.47-3.35c0-.28-.05-3.76-.05-3.76l-1.78,0s-.09,1.35-.34,1.37h0C7.14,11.13,7,9.58,7,9.58l-6.5-.3c.05-.66.26-.71.26-.71L7,8.08S6.87,6,7.38,5.95h0c.42,0,.32,2.08.32,2.08l1.76-.1s.06-2.82,0-4.71A3.28,3.28,0,0,1,10.39.49h.23m0-.49h-.23a.65.65,0,0,0-.46.23,4.09,4.09,0,0,0-.94,3C9,4.63,9,6.59,9,7.46l-.76,0a2.91,2.91,0,0,0-.37-1.85.64.64,0,0,0-.46-.2.72.72,0,0,0-.52.24A3.24,3.24,0,0,0,6.5,7.63L.76,8.09H.68C.47,8.15.11,8.36,0,9.25l0,.5.51,0,6.06.28c.14,1.29.41,1.56.81,1.56s.67-.28.8-1.37H9c0,1,0,3,0,3.26s.21,2,.38,2.93l-2.09.3a.61.61,0,0,0-.42.21,1.52,1.52,0,0,0-.17,1.24l.06.42H9.93l.11.26L10.5,20,11,18.86l.11-.26h3.12l.06-.42a1.52,1.52,0,0,0-.17-1.24.61.61,0,0,0-.42-.21l-2.09-.3c.17-1,.38-2.72.38-2.93s0-2.29,0-3.26h.84c.13,1.09.4,1.35.76,1.37h0c.44,0,.71-.27.85-1.56l6.06-.28.51,0,0-.5c-.07-.88-.43-1.1-.64-1.15h-.08L14.5,7.63a3.24,3.24,0,0,0-.37-1.93.7.7,0,0,0-.49-.24h0a.65.65,0,0,0-.48.2,2.91,2.91,0,0,0-.37,1.85l-.76,0c0-.87,0-2.83,0-4.24a4.09,4.09,0,0,0-.94-3A.65.65,0,0,0,10.61,0Z"/></g></g></svg>',
    size: [21, 20],
  },
  twin_small: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16" width="19px" height="16px" add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>twin_small_live</title><g id="Layer_2" data-name="Layer 2"><g id="Twinprop_Small" data-name="Twinprop Small"><path class="cls-1" d="M9.5,15.75c-.21,0-.34-.17-.41-.51l-2.88.23v-.27c0-.78,0-1.11.28-1.13L9,13.1c-.31-1.86-.55-5-.59-5.55l-.08-.09H6.08L.25,6.54v-1A.43.43,0,0,1,.67,5l3.75-.27L5,4.45V3.53H4.73V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.54-.83s.42.31.53.83h.07a.35.35,0,0,1,.34.35v.83H6.36v1l2-.08C8.42.81,9.09.25,9.49.25s1.09.55,1.12,4.21l2,.08v-1h-.25V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.53-.83s.42.31.54.83h.07a.35.35,0,0,1,.34.35v.83H14v.92l.57.32L18.32,5a.42.42,0,0,1,.43.46v1L13,7.46H10.71l-.08.09c0,.56-.27,3.68-.59,5.55l2.46,1c.28,0,.28.35.28,1.13v.27l-2.88-.23C9.84,15.58,9.71,15.75,9.5,15.75Z"/><path class="cls-2" d="M9.51.5c.08,0,.86.11.86,4.2l2.51.1V3.28h-.26V2.7a.1.1,0,0,1,.09-.1H13c.08-.4.2-.83.33-.83s.26.43.34.83h.27a.1.1,0,0,1,.09.1v.57h-.25V4.6h0l.75.42,3.79.28h0c.06,0,.17,0,.17.22v.82l-5.58.89H10.6l-.21.24s-.26,3.8-.63,5.81l2.71,1.05h0s.06.08.06.88L9.7,15s0,.53-.2.53S9.3,15,9.3,15l-2.84.22c0-.8,0-.88.06-.88h0l2.71-1.05c-.36-2-.63-5.81-.63-5.81L8.4,7.21H6.08L.49,6.33V5.51c0-.19.11-.22.17-.22h0L4.49,5l.75-.42V3.28H5V2.7a.1.1,0,0,1,.09-.1h.27c.08-.4.2-.83.34-.83s.25.43.33.83h.27a.1.1,0,0,1,.09.1v.57H6.12V4.8l2.51-.1c0-4.09.78-4.2.86-4.2h0m0-.5h0c-.22,0-.61.14-.9.89a10.72,10.72,0,0,0-.43,3.33l-1.53.06v-.5h.25V2.7a.6.6,0,0,0-.46-.59c-.11-.42-.3-.85-.73-.85s-.63.43-.73.85a.6.6,0,0,0-.46.59V3.78h.25V4.3l-.4.22L.71,4.79h0A.67.67,0,0,0,0,5.51V6.76l.42.07L6,7.71H8.14c.06.8.27,3.44.55,5.22l-2.23.87H6.31L6.17,14c-.16.16-.2.32-.2,1.24v.54l.53,0,2.41-.19a.6.6,0,0,0,1.19,0l2.41.19.53,0v-.54c0-.76,0-1.33-.47-1.38l-2.24-.87c.28-1.78.49-4.42.55-5.22H13l5.58-.89L19,6.76V5.51a.67.67,0,0,0-.67-.72h-.05l-3.63-.27-.4-.22V3.78h.25V2.7a.6.6,0,0,0-.46-.59c-.11-.42-.3-.85-.73-.85s-.62.43-.73.85a.6.6,0,0,0-.46.59V3.78h.25v.5l-1.53-.06C10.81,1.45,10.37,0,9.53,0h0Z"/></g></g></svg>',
    size: [19, 16],
  },
  ground_emergency: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>emergency_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Emergency"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.35,8.27a1.05,1.05,0,0,1-.59.93A3.5,3.5,0,0,0,2.62,6.63a1.71,1.71,0,0,1-.56,1.26l-.41.38a1.71,1.71,0,0,0-.56,1.26A1.79,1.79,0,0,0,2.4,11.21H3.6A1.79,1.79,0,0,0,4.92,9.52,1.71,1.71,0,0,0,4.35,8.27Z"/></g></g></svg>',
    size: [6, 15],
  },
  ground_service: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>service_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Service"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.85,8a1.67,1.67,0,0,0-.65-1.3A.12.12,0,0,0,4,6.74v.95a.12.12,0,0,1,0,.09l-.9.65a.12.12,0,0,1-.13,0L2,7.77a.12.12,0,0,1,0-.09V6.73a.11.11,0,0,0-.18-.08A1.72,1.72,0,0,0,1.15,8,1.66,1.66,0,0,0,2,9.4a.19.19,0,0,1,.1.17l0,1.54a.1.1,0,0,0,.11.1H3.78c.07,0,.12,0,.11-.1V9.57A.22.22,0,0,1,4,9.4,1.7,1.7,0,0,0,4.85,8Z"/></g></g></svg>',
    size: [6, 15],
  },
  ground_unknown: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>unknown_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Unknown"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.31,7.51A1.1,1.1,0,0,0,4,7.12a1.55,1.55,0,0,0-.5-.3,2.18,2.18,0,0,0-.77-.12,1.81,1.81,0,0,0-.65.11,1.48,1.48,0,0,0-.5.32,1.43,1.43,0,0,0-.32.48,1.62,1.62,0,0,0-.12.6v.12H2.31V8.2a1,1,0,0,1,0-.25.54.54,0,0,1,.09-.19.42.42,0,0,1,.15-.12.49.49,0,0,1,.22,0,.41.41,0,0,1,.29.09.39.39,0,0,1,.1.3.33.33,0,0,1,0,.19A.65.65,0,0,1,3,8.33l-.22.16a1.61,1.61,0,0,0-.25.22A1.28,1.28,0,0,0,2.33,9a1.2,1.2,0,0,0-.11.45v.37H3.29V9.52a.44.44,0,0,1,.09-.22,1,1,0,0,1,.19-.18l.25-.17a1.35,1.35,0,0,0,.27-.23,1.19,1.19,0,0,0,.21-.33,1.23,1.23,0,0,0,.09-.49A1.06,1.06,0,0,0,4.31,7.51Z"/><rect class="cls-2" x="2.18" y="10.26" width="1.12" height="1.02"/></g></g></svg>',
    size: [6, 15],
  },
  ground_fixed: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12px" height="12px" add_stroke_selected><defs><style>.cls-1{fill:#5a5a5a;}.cls-2{fill:#fff;}</style></defs><title>fixed_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Fixed"><polygon class="cls-1" points="0 0 0 0.43 0 12 12 12 12 0 0 0"/><path class="cls-2" d="M3.24,2.73,1.36.86h9.29L8.77,2.73A4.29,4.29,0,0,0,3.24,2.73Z"/><circle class="cls-2" cx="6" cy="6" r="3.58" transform="translate(-2.49 6) rotate(-45)"/><path class="cls-2" d="M2.73,3.23a4.29,4.29,0,0,0,0,5.54L.86,10.62V1.37Z"/><path class="cls-2" d="M3.24,9.28a4.29,4.29,0,0,0,5.54,0l1.87,1.87H1.35Z"/><path class="cls-2" d="M9.28,8.77a4.29,4.29,0,0,0,0-5.54l1.86-1.86v9.26Z"/><circle class="cls-1" cx="6" cy="6" r="2" transform="translate(-2.49 6) rotate(-45)"/></g></g></svg>',
    size: [12, 12],
  },
  unknown: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17px" height="17px"  add_stroke_selected><defs><style>.cls-1{fill:aircraft_color_fill;}.cls-2{fill:aircraft_color_stroke;}</style></defs><title>unknown_live</title><g id="Layer_2" data-name="Layer 2"><g id="Unknown"><path class="cls-1" d="M5.25,16.76c-.92,0-1.33-.46-1.39-.86a1,1,0,0,1,.79-1.11c.25-.08,1.22-.43,2.63-1V10.65h-6c-.68,0-1-.35-1-.66a.81.81,0,0,1,.6-.86C1.14,9,4.8,7,7.28,5.63V3c0-1.11.44-2.71,1.23-2.71S9.77,1.84,9.77,3V5.63C12.22,7,15.87,9,16.14,9.13a.8.8,0,0,1,.61.86c-.05.31-.36.67-1.05.67H9.77v3.19l1.61.59,1,.36a1.05,1.05,0,0,1,.8,1.11c-.07.39-.47.86-1.39.86Z"/><path class="cls-2" d="M8.54.48c.55,0,1,1.36,1,2.47V5.77s6.15,3.45,6.53,3.59c.72.25.61,1.06-.36,1.06H9.53V14c1.44.52,2.5.93,2.76,1,1,.36.85,1.5-.52,1.5H5.25c-1.38,0-1.52-1.14-.52-1.5.26-.08,1.33-.47,2.78-1V10.41H1.29c-1,0-1-.81-.36-1.06.4-.13,6.59-3.59,6.59-3.59V3c0-1.11.44-2.47,1-2.47h0m0-.48h0C7.51,0,7,1.76,7,3V5.49C4.69,6.79,1.11,8.77.77,8.9A1,1,0,0,0,0,10a1.15,1.15,0,0,0,1.27.86H7v2.78c-1.3.49-2.23.82-2.45.89a1.29,1.29,0,0,0-1,1.39c.08.49.56,1.05,1.63,1.05h6.51c1.07,0,1.54-.57,1.63-1.05a1.28,1.28,0,0,0-.94-1.38l-1-.36L10,13.67V10.89h5.7A1.16,1.16,0,0,0,17,10a1,1,0,0,0-.77-1.12C15.9,8.77,12.34,6.79,10,5.49V3c0-1.19-.47-3-1.47-3Z"/></g></g></svg>',
    size: [17, 17],
  },
};

const TypeDesignatorIcons = {
  A318: 'airliner', // shortened a320
  A319: 'airliner', // shortened a320
  A320: 'airliner',
  A321: 'airliner', // stretched a320

  A388: 'heavy_4e',
  // dubious since these are old-generation 737s
  // but the shape is similar
  B731: 'airliner',
  B732: 'airliner',
  B733: 'airliner',
  B734: 'airliner',
  B735: 'airliner',
  // these probably need reworking
  // since they vary in length
  B736: 'airliner',
  B737: 'airliner',
  B738: 'airliner',
  B739: 'airliner',
  B741: 'heavy_4e',
  B742: 'heavy_4e',
  B743: 'heavy_4e',
  B744: 'heavy_4e',
  B74D: 'heavy_4e',
  B74S: 'heavy_4e',
  B74R: 'heavy_4e',
  BLCF: 'heavy_2e',
  BSCA: 'heavy_4e', // hah!
  B748: 'heavy_4e',
  B772: 'heavy_2e', // all pretty similar except for length
  B77W: 'heavy_2e',
  B773: 'heavy_2e',
  B77L: 'heavy_2e',
  DH8A: 'twin_small',
  DH8B: 'twin_small',
  DH8C: 'twin_small',
  DH8D: 'twin_small',
  E170: 'jet_swept',
  E45X: 'jet_swept',
  B712: 'jet_swept',
  C650: 'jet_swept',
  C750: 'jet_swept',
  E135: 'jet_swept',
  E145: 'jet_swept',
  CL30: 'jet_swept',
  CL35: 'jet_swept',
  CL60: 'jet_swept',
  GL5T: 'jet_swept',
  GLF2: 'jet_swept', // close enough
  GLF3: 'jet_swept',
  GLF4: 'jet_swept',
  GLF5: 'jet_swept',
  GLF6: 'jet_swept',
  CRJ1: 'jet_swept',
  CRJ2: 'jet_swept',
  CRJ7: 'jet_swept',
  CRJ9: 'jet_swept',
  H25A: 'jet_swept',
  H25B: 'jet_swept',
  H25C: 'jet_swept',
  MD80: 'jet_swept',
  MD81: 'jet_swept',
  MD82: 'jet_swept',
  MD83: 'jet_swept',
  MD87: 'jet_swept',
  MD88: 'jet_swept',
  A37: 'hi_perf',
  A700: 'hi_perf',
  LEOP: 'hi_perf',
  ME62: 'hi_perf',
  T2: 'hi_perf',
  T37: 'hi_perf',
  T38: 'hi_perf',
  A10: 'hi_perf',
  A148: 'hi_perf',
  A3: 'hi_perf',
  A6: 'hi_perf',
  AJET: 'hi_perf',
  AT3: 'hi_perf',
  CKUO: 'hi_perf',
  EUFI: 'hi_perf',
  F1: 'hi_perf',
  F100: 'hi_perf',
  F111: 'hi_perf',
  F117: 'hi_perf',
  F14: 'hi_perf',
  F15: 'hi_perf',
  F18: 'hi_perf',
  F22: 'hi_perf',
  F22A: 'hi_perf',
  F4: 'hi_perf',
  F5: 'hi_perf',
  FOUG: 'hi_perf',
  J8A: 'hi_perf',
  J8B: 'hi_perf',
  JH7: 'hi_perf',
  LTNG: 'hi_perf',
  METR: 'hi_perf',
  MG19: 'hi_perf',
  MG25: 'hi_perf',
  MG29: 'hi_perf',
  MG31: 'hi_perf',
  MG44: 'hi_perf',
  MIR4: 'hi_perf',
  MT2: 'hi_perf',
  Q5: 'hi_perf',
  RFAL: 'hi_perf',
  S3: 'hi_perf',
  S37: 'hi_perf',
  SR71: 'hi_perf',
  SU15: 'hi_perf',
  SU24: 'hi_perf',
  SU25: 'hi_perf',
  SU27: 'hi_perf',
  T22M: 'hi_perf',
  T4: 'hi_perf',
  TOR: 'hi_perf',
  TU22: 'hi_perf',
  VAUT: 'hi_perf',
  WB57: 'hi_perf',
  Y130: 'hi_perf',
  YK28: 'hi_perf',
  // 'BE20': _b200,

  // 'C130': _c130,
  // 'C30J': _c130
};

// Maps ICAO aircraft type description codes (e.g. "L2J") to aircraft icons. This is used if the ICAO type designator (e.g. "B731")
// cannot be found in the TypeDesignatorIcons mappings. The key can be one of the following:
//   - Single character: The basic aircraft type letter code (e.g. "H" for helicopter).
//   - Three characters: The ICAO type description code (e.g. "L2J" for landplanes with 2 jet engines).
//   - Five characters: The ICAO type description code concatenated with the wake turbulence category code, separated by
//     a dash (e.g. "L2J-M").

const TypeDescriptionIcons = {
  //    'H': 'helicopter',
  H1P: 'helicopter',
  H1T: 'helicopter',
  H2P: 'helicopter',
  H2T: 'helicopter',
  H3T: 'helicopter',
  L1P: 'cessna',
  L1T: 'cessna',
  L1J: 'hi_perf',
  L2T: 'twin_small',
  L2P: 'twin_large',
  'L2J-L': 'jet_swept',
  'L2J-M': 'airliner',
  'L2J-H': 'heavy_2e',
  /*
    'L3T': '',    //anyone write this Icon ?
    'L3J': '',    //anyone write this Icon ?
*/
  L4T: 'heavy_4e',
  L4J: 'heavy_4e',
};

const CategoryIcons = {
  A1: 'cessna',
  A2: 'jet_nonswept',
  A3: 'airliner',
  A5: 'heavy_4e',
  A7: 'helicopter',
  B2: 'balloon',
  C0: 'ground_unknown',
  C1: 'ground_emergency',
  C2: 'ground_service',
  C3: 'ground_fixed',
};

export function GetBaseMarker(category, typeDesignator, typeDescription, wtc) {
  if (typeDesignator in TypeDesignatorIcons) {
    return Shapes[TypeDesignatorIcons[typeDesignator]];
  }

  if (
    typeDescription !== undefined
    && typeDescription !== null
    && typeDescription.length === 3
  ) {
    if (wtc !== undefined && wtc !== null && wtc.length === 1) {
      const typeDescriptionWithWtc = `${typeDescription}-${wtc}`;
      if (typeDescriptionWithWtc in TypeDescriptionIcons) {
        return Shapes[TypeDescriptionIcons[typeDescriptionWithWtc]];
      }
    }

    if (typeDescription in TypeDescriptionIcons) {
      return Shapes[TypeDescriptionIcons[typeDescription]];
    }

    const basicType = typeDescription.charAt(0);
    if (basicType in TypeDescriptionIcons) {
      return Shapes[TypeDescriptionIcons[basicType]];
    }
  }

  if (category in CategoryIcons) {
    return Shapes[CategoryIcons[category]];
  }

  return Shapes.unknown;
}

function svgPathToSvg(path, stroke, fill, selectedStroke) {
  path = path
    .replace('aircraft_color_fill', fill)
    .replace('aircraft_color_stroke', stroke)
    .replace('add_stroke_selected', selectedStroke);
  return path;
}

export function SvgPathToUri(path, stroke, fill, selectedStroke) {
  return `data:image/svg+xml;base64,${btoa(
    svgPathToSvg(path, stroke, fill, selectedStroke),
  )}`;
}
