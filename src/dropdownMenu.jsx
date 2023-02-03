import React from "react";

const DropdownMenu = ({ dropdownMenuOpen }) => {
    return (
        <div
            className="dropdownMenu ma open-close"
            style={
                !dropdownMenuOpen
                    ? {
                          transform: "scaleY(0)"
                      }
                    : {
                          transform: "scaleY(1)"
                      }
            }
        >
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">
                    Главная
                </div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">
                    Платформа
                </div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">
                    Для бизнеса
                </div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">О нас</div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">
                    Подписка
                </div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-point">
                <div className="dropdownMenu-point-left-arrow imgBack"></div>
                <div className="dropdownMenu-point-menu-point fs-40">
                    Демонстрация
                </div>
                <div className="dropdownMenu-point-right-arrow imgBack"></div>
            </div>
            <hr />
            <div className="dropdownMenu-siteMap">
                <div className="dropdownMenu-siteMap-leftBlock">
                    <div className="dropdownMenu-siteMap-blockBack">
                        <div className="dropdownMenu-siteMap-blockName">
                            Обучение
                            <hr className="dropdownMenu-siteMap-blockName-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint fs-16">
                                Курсы конкурентной разведки
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint fs-16">
                                Корпоративное обучение
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                        </div>
                    </div>
                </div>
                <div className="dropdownMenu-siteMap-middleBlock">
                    <div className="dropdownMenu-siteMap-blockBack">
                        <div className="dropdownMenu-siteMap-blockName">
                            Продукты
                            <hr className="dropdownMenu-siteMap-blockName-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Ситуационный центр
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Анализ аудитории
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Сканер уязвимостей
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Коммуникации
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Аналитика
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                        </div>
                    </div>
                </div>
                <div className="dropdownMenu-siteMap-rightBlock">
                    <div className="dropdownMenu-siteMap-blockBack">
                        <div className="dropdownMenu-siteMap-blockName">
                            Публичная деятельность
                            <hr className="dropdownMenu-siteMap-blockName-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Кибердед
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Телеграм-каналы
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                            <div className="dropdownMenu-siteMap-blockPoint">
                                Социальные сети
                            </div>
                            <hr className="dropdownMenu-siteMap-blockPoint-hr" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default DropdownMenu;
