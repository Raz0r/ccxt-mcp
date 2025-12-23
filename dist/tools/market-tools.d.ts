/**
 * 시장 관련 도구들을 정의합니다.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CcxtMcpServer } from '../server.js';
/**
 * 시장 관련 도구들을 서버에 등록합니다.
 */
export declare function registerMarketTools(server: McpServer, ccxtServer: CcxtMcpServer): void;
