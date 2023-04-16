export const body = document.querySelector("body");
export const root = document.querySelector("#main");
export const BASE_URL = "https://ajax.test-danit.com/api/v2/cards";
export const COOKIE_TOKEN_NAME = "token";


export const svgCloseIcon = `
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7279 1.41421L11.3137 0L6.36396 4.94975L1.41421 0L0 1.41421L4.94975 6.36396L0 11.3137L1.41421 12.7279L6.36396 7.77817L11.3137 12.7279L12.7279 11.3137L7.77817 6.36396L12.7279 1.41421Z" fill="#541A81"/>
    </svg>`;
export const svgEditIcon = `
    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16 1L9 13M6 17H11M15.3453 7.40486L11.0721 3.52012C10.704 3.18544 10.2243 3 9.72679 3H3.82843C3.29799 3 2.78929 3.21071 2.41421 3.58579L1.58579 4.41421C1.21071 4.78929 1 5.29799 1 5.82843V19.1716C1 19.702 1.21071 20.2107 1.58579 20.5858L2.41421 21.4142C2.78929 21.7893 3.29799 22 3.82843 22H13.3676C14.0701 22 14.7212 21.6314 15.0826 21.029L15.715 19.975C15.9015 19.6642 16 19.3085 16 18.946V8.88474C16 8.32125 15.7623 7.7839 15.3453 7.40486Z" stroke="#3B3F61" stroke-linecap="round"/>
    </svg>
`;

export const deleteCloseIcon = `
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5V17.5C8 17.7761 7.77614 18 7.5 18C7.22386 18 7 17.7761 7 17.5V7.5Z" fill="#3B3F61"/>
        <path d="M12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5V17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V7.5Z" fill="#3B3F61"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3V2C7 0.895431 7.89543 0 9 0H11C12.1046 0 13 0.895431 13 2V3H19.5C19.7761 3 20 3.22386 20 3.5C20 3.77614 19.7761 4 19.5 4H18V18C18 20.2091 16.2091 22 14 22H6C3.79086 22 2 20.2091 2 18V4H0.5C0.223857 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3H7ZM9 1H11C11.5523 1 12 1.44772 12 2V3H8V2C8 1.44772 8.44772 1 9 1ZM3 4V18C3 19.6569 4.34315 21 6 21H14C15.6569 21 17 19.6569 17 18V4H3Z" fill="#3B3F61"/>
    </svg>
`;