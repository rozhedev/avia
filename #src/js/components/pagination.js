const paginationList = document.querySelector(".pagination__list");
let totalPages = 20;
let page = 10;

function createPagination(totalPages, page) {
    let liElem = "";
    let activeLi;
    let beforePage = page - 1; // 5 - 1 = 4
    let afterPage = page + 1; // 5 + 1 = 6

    if (page > 1) {

        liElem += `<li class="pagination__list-item prev" onclick="createPagination(totalPages, ${page - 1
            })"><div class="article-content__item-icon">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.166238 6.22063L5.70186 11.5061C5.92272 11.7202 6.27985 11.7202 6.50071 11.5061L6.83435 11.1825C7.05522 10.9684 7.05522 10.6221 6.83435 10.408L2.02711 5.83333L6.82966 1.25871C7.05052 1.04456 7.05052 0.698269 6.82966 0.484118L6.49601 0.160613C6.27515 -0.0535377 5.91802 -0.0535377 5.69716 0.160613L0.161539 5.44604C-0.0546227 5.66019 -0.0546227 6.00648 0.166238 6.22063Z" fill="#A7B0BC"/>
            </svg>
        </div></li>`;
    }
    if (page > 2) {
        liElem += `<li class="pagination__list-item first num" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;

        if (page > 3) {
            liElem += `<li class="pagination__list-item dots"><span>...</span></li>`;
        }
    }

    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }

    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage = afterPage + 1;
    }

    for (let pageLenght = beforePage; pageLenght <= afterPage; pageLenght++) {
        if (pageLenght > totalPages) {
            continue;
        }
        if (pageLenght == 0) {
            pageLenght = pageLenght + 1;
        }
        if (page == pageLenght) {
            activeLi = "_active";
        } else {
            activeLi = "";
        }
        liElem += `<li class="pagination__list-item num ${activeLi}" onclick="createPagination(totalPages, ${pageLenght})"><span>${pageLenght}</span></li>`;
    }

    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liElem += `<li class="pagination__list-item dots"><span>...</span></li>`;
        }

        liElem += `<li class="pagination__list-item last num" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}<span></li>`;
    }

    if (page < totalPages) {
        liElem += `<li class="pagination__list-item next" onclick="createPagination(totalPages, ${page + 1
            })"><div class="article-content__item-icon">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.83376 6.22063L1.29814 11.5061C1.07728 11.7202 0.720147 11.7202 0.499286 11.5061L0.165646 11.1825C-0.0552152 10.9684 -0.0552152 10.6221 0.165646 10.408L4.97289 5.83333L0.170345 1.25871C-0.050516 1.04456 -0.050516 0.698269 0.170345 0.484118L0.503986 0.160613C0.724846 -0.0535377 1.08198 -0.0535377 1.30284 0.160613L6.83846 5.44604C7.05462 5.66019 7.05462 6.00648 6.83376 6.22063Z"
                    fill="#A7B0BC" />
            </svg>
        </div></li>`;
    }
    paginationList.innerHTML = liElem;
    return liElem;
}

if (paginationList) {
    paginationList.innerHTML = createPagination(totalPages, page);
}