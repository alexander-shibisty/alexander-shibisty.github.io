export declare function generateCodeVerifier(): string;
export declare function generateCodeChallenge(verifier: string): Promise<string>;
export declare function randomState(): string;
export interface PopupAuthResult {
    code: string;
    state: string;
}
/**
 * Открывает OAuth-попап и ждёт сообщение от callback-страницы
 * (public/dropbox-callback.html), захостенной на том же домене,
 * что и редиректный URI, зарегистрированный в приложении провайдера.
 */
export declare function runPopupAuth(authorizeUrl: string, expectedState: string): Promise<PopupAuthResult>;
